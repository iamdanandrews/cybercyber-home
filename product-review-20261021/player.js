(function () {
  'use strict';
  var video = document.querySelector('video[data-product-film]');
  if (!video) return;
  var figure = video.closest('.film-player');
  var toolbar = figure.querySelector('.film-toolbar');
  var button = toolbar.querySelector('button');
  var seek = toolbar.querySelector('input');
  var clock = toolbar.querySelector('output');
  var error = document.querySelector('.film-error');
  var mobile = matchMedia('(max-width:819px)');
  var reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  var product = video.dataset.productFilm;
  var expectedDuration = product === 'frame' ? 13 : 16;
  var pending = false, request = 0, viewed = false;

  function time(seconds) {
    seconds = Math.max(0, Math.floor(seconds || 0));
    return Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');
  }
  function select() {
    var device = mobile.matches ? 'mobile' : 'desktop';
    var folder = product === 'kaido' ? 'product-motion-20261023/' : 'product-motion-20261021-v2/';
    var prefix = folder + product + '-' + device;
    if (reducedMotion.matches) prefix += '-reduced';
    video.src = prefix + '.mp4';
    video.poster = prefix.replace(/-reduced$/, '') + '-poster.webp';
    video.width = mobile.matches ? (product === 'frame' ? 780 : 900) : 1600;
    video.height = mobile.matches ? (product === 'frame' ? 960 : 1200) : 1000;
    if (product === 'kaido') {
      document.querySelector('.film-original').href = 'product-stories-20261021/kaido-' + device + '-source.mp4';
      error.querySelector('a').href = 'product-stories-20261021/kaido-' + device + '-source.mp4';
    }
  }
  function sync() {
    var duration = Number.isFinite(video.duration) ? video.duration : expectedDuration;
    var action = pending ? 'Cancel' : video.ended ? 'Replay' : video.paused ? 'Play' : 'Pause';
    button.textContent = action;
    button.setAttribute('aria-label', action + (pending ? ' loading film' : ' film'));
    toolbar.setAttribute('aria-busy', String(pending));
    seek.max = duration;
    seek.value = video.currentTime || 0;
    seek.style.setProperty('--film-progress', ((video.currentTime || 0) / duration * 100) + '%');
    seek.disabled = video.readyState < 1 || !video.seekable.length || video.seekable.end(video.seekable.length - 1) === 0;
    seek.setAttribute('aria-valuetext', time(video.currentTime) + ' of ' + time(duration));
    clock.textContent = time(video.currentTime) + ' / ' + time(duration);
  }
  function centerFilm() {
    figure.scrollIntoView({block: 'center', behavior: 'instant'});
  }
  function play() {
    if (pending || !video.paused) return;
    if (video.ended) video.currentTime = 0;
    var id = ++request;
    pending = true;
    error.hidden = true;
    sync();
    video.play().then(function () {
      if (id !== request) return;
      pending = false;
      viewed = true;
      sync();
    }).catch(function (e) {
      if (id !== request) return;
      pending = false;
      if (e.name !== 'AbortError') error.hidden = false;
      sync();
    });
  }
  function toggle() {
    if (pending || !video.paused) {
      request++;
      pending = false;
      video.pause();
      sync();
    } else play();
  }
  select();
  mobile.addEventListener('change', function () {
    if (!viewed && !pending && video.paused && video.currentTime === 0) select();
  });
  reducedMotion.addEventListener('change', function () {
    if (!viewed && !pending && video.paused && video.currentTime === 0) select();
  });
  button.addEventListener('click', function () {
    // Keep the whole film in view when controls receive focus; browsers otherwise
    // scroll only to the button and can tuck the opening frame behind the header.
    centerFilm();
    toggle();
  });
  video.addEventListener('click', toggle);
  seek.addEventListener('input', function () {
    if (video.readyState < 1) return;
    viewed = true;
    video.currentTime = Number(seek.value);
    sync();
  });
  seek.addEventListener('focus', centerFilm);
  ['timeupdate', 'loadedmetadata', 'pause', 'ended', 'seeked', 'progress', 'canplay'].forEach(function (event) {
    video.addEventListener(event, sync);
  });
  video.addEventListener('playing', function () {
    pending = false;
    viewed = true;
    error.hidden = true;
    sync();
  });
  video.addEventListener('error', function () {
    request++;
    pending = false;
    error.hidden = false;
    sync();
  });
  var jump = document.querySelector('.workflow-jump');
  if (jump) jump.addEventListener('click', function (e) {
    e.preventDefault();
    history.replaceState(null, '', '#native-walkthrough');
    figure.scrollIntoView({block: 'center', behavior: 'instant'});
    button.focus({preventScroll: true});
    play();
  });
  // Native controls remain the complete fallback until enhancement is ready.
  sync();
  toolbar.hidden = false;
  video.controls = false;
})();
