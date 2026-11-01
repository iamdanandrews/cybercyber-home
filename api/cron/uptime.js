// Scheduled down-alert for every live site (vercel.json crons, every 15 minutes). Free alternative
// to a paid uptime service: Vercel runs it and the existing Resend sender emails the studio.
// A site must fail twice, 20 seconds apart, before anyone is emailed, so a blip stays quiet.
// It keeps no state, so an outage emails on every run until the site is back.
// Vercel sends CRON_SECRET as a bearer token; anything else gets a 401.

const TO = process.env.ENQUIRY_TO || 'hello@cybercyber.ai';
const FROM = process.env.ENQUIRY_FROM || 'cyber:cyber <hello@cybercyber.ai>';
const RETRY_MS = 20000;
const TIMEOUT_MS = 10000;

// expect lists acceptable statuses. The Ikarao handover sits behind its own password, so 401 is up.
const SITES = [
  { name: 'Kaido site', url: 'https://www.kaidohealth.co/', expect: [200] },
  { name: 'Kaido API', url: 'https://www.kaidohealth.co/api/health', expect: [200] },
  { name: 'Frame site', url: 'https://www.framebjj.app/', expect: [200] },
  { name: 'Frame API', url: 'https://www.framebjj.app/api/v1/health', expect: [200] },
  { name: 'Cyber site', url: 'https://www.cybercyber.ai/', expect: [200] },
  { name: 'Personal site', url: 'https://iamdanandrews.com/', expect: [200] },
  { name: 'Ikarao handover', url: 'https://ikarao-handover.vercel.app/', expect: [401] },
];

async function check(site) {
  try {
    const r = await fetch(site.url, { redirect: 'follow', signal: AbortSignal.timeout(TIMEOUT_MS) });
    return site.expect.includes(r.status) ? null : `HTTP ${r.status}`;
  } catch (e) {
    return e.name === 'TimeoutError' ? `no response in ${TIMEOUT_MS / 1000}s` : 'could not connect';
  }
}

async function failures(sites) {
  const results = await Promise.all(sites.map(async (site) => ({ site, problem: await check(site) })));
  return results.filter((r) => r.problem);
}

export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  let down = await failures(SITES);
  if (down.length) {
    await new Promise((resolve) => setTimeout(resolve, RETRY_MS));
    down = await failures(down.map((d) => d.site));
  }
  if (!down.length) return res.status(200).json({ checked: SITES.length, down: [] });

  const lines = down.map((d) => `${d.site.name} (${d.site.url}): ${d.problem}`);
  console.error(`Uptime check failed: ${lines.join('; ')}`);
  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(500).json({ error: 'Sending is not configured.', down: lines });

  const sent = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      subject: `Site down: ${down.map((d) => d.site.name).join(', ')}`,
      text: `Failed twice, 20 seconds apart:\n\n${lines.join('\n')}\n\nThis repeats every 15 minutes until it recovers.`,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  return res.status(sent.ok ? 200 : 502).json({ checked: SITES.length, down: lines, emailed: sent.ok });
}
