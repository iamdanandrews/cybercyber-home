// Contact form endpoint: validates an enquiry from the homepage and emails it to the studio
// through Resend, with the visitor as reply-to. Needs RESEND_API_KEY in the Vercel project;
// cybercyber.ai is verified in Resend, so it sends from hello@cybercyber.ai. Without a key it
// answers 503 and the page falls back to opening the visitor's email app.

const TO = process.env.ENQUIRY_TO || 'hello@cybercyber.ai';
const FROM = process.env.ENQUIRY_FROM || 'cyber:cyber <hello@cybercyber.ai>';
const ORIGINS = ['https://www.cybercyber.ai', 'https://cybercyber.ai'];
const MIN_FILL_MS = 2500;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v, max) {
  return String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max);
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const origin = req.headers.origin;
  if (origin && !ORIGINS.includes(origin) && !/\.vercel\.app$/.test(origin)) {
    return res.status(403).json({ error: 'Not allowed.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = null; }
  }
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'Invalid request.' });

  // Spam: a filled honeypot or an implausibly fast submit is quietly accepted and dropped.
  const startedAt = Number(body.startedAt);
  if (clean(body.website, 200) || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return res.status(200).json({ ok: true });
  }

  const brief = clean(body.brief, 2000);
  const name = clean(body.name, 120).replace(/\n/g, ' ');
  const email = clean(body.email, 254).replace(/\n/g, '');
  const ref = clean(body.ref, 12).replace(/[^A-Z0-9]/gi, '');
  if (brief.length < 10) return res.status(400).json({ field: 'brief', error: 'Add a line or two about what you’re building.' });
  if (!name) return res.status(400).json({ field: 'name', error: 'Add your name.' });
  if (!EMAIL.test(email)) return res.status(400).json({ field: 'email', error: 'Add an email I can reply to.' });

  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(503).json({ error: 'Sending is not configured.' });

  const text = [
    `New enquiry from cybercyber.ai${ref ? ` (ref ${ref})` : ''}`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    brief,
  ].join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Project enquiry — ${name}`,
        text,
      }),
    });
    if (!r.ok) {
      console.error('resend failed', r.status, await r.text().catch(() => ''));
      return res.status(502).json({ error: 'Could not send.' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('resend error', e);
    return res.status(502).json({ error: 'Could not send.' });
  }
};
