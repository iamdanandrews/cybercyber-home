/* Choose a viewport-specific, motion-aware edit before playback. */
(function () {
  var video = document.querySelector('video[data-product-film]');
  if (!video) return;
  var product = video.getAttribute('data-product-film');
  var mobile = matchMedia('(max-width:819px)');
  var reduced = matchMedia('(prefers-reduced-motion:reduce)');
  var full = document.querySelector('.workflow-full');
  function select() {
    var device = mobile.matches ? 'mobile' : 'desktop';
    var name = product === 'frame' ? 'frame' : 'kaido-' + device;
    var prefix = 'product-stories-20261021/' + name;
    video.src = prefix + (reduced.matches ? '-reduced' : '') + '.mp4';
    video.poster = prefix + '-poster.png';
    video.width = product === 'frame' ? 720 : mobile.matches ? 780 : 1600;
    video.height = product === 'frame' ? 1100 : mobile.matches ? 1200 : 1000;
    if (full) {
      full.href = 'product-stories-20261021/kaido-' + device + '-source.mp4';
      full.textContent = 'View the uncropped source clips ↗';
    }
  }
  // Preserve an active viewing session, including a visitor's paused position.
  function update() { if (video.paused && video.currentTime === 0) select(); }
  select();
  mobile.addEventListener('change', update);
  reduced.addEventListener('change', update);
})();
