/* BF Service — script unico del sito */
(function () {
  document.documentElement.classList.add('js');

  // Vecchi link della demo (es. .../#/faq) -> nuove pagine
  var OLD = { home: 'index.html', sos: 'richiesta-intervento.html', servizi: 'servizi.html', marchi: 'marchi.html',
    zone: 'zone.html', 'chi-siamo': 'chi-siamo.html', faq: 'faq.html', contatti: 'contatti.html' };
  var h = location.hash.replace('#/', '');
  if (location.hash.indexOf('#/') === 0 && OLD[h]) { location.replace(OLD[h]); return; }

  var hdr = document.querySelector('.hdr');
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');

  if (burger) burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Menu a tendina "Servizi"
  document.querySelectorAll('.nav__drop > button').forEach(function (btn) {
    var drop = btn.parentElement;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = drop.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    drop.addEventListener('mouseenter', function () { if (window.innerWidth > 1080) { drop.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); } });
    drop.addEventListener('mouseleave', function () { if (window.innerWidth > 1080) { drop.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); } });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.nav__drop.is-open').forEach(function (d) { if (window.innerWidth > 1080) d.classList.remove('is-open'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav__drop.is-open').forEach(function (d) { d.classList.remove('is-open'); });
      if (nav) nav.classList.remove('is-open');
    }
  });

  // Ombra header allo scroll
  var onScroll = function () { if (hdr) hdr.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Comparsa morbida delle sezioni
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('is-in'); }); }

  // Modulo: nella demo non invia nulla, mostra la conferma
  document.querySelectorAll('form.form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      f.classList.add('is-sent');
      var ok = f.querySelector('.form-ok'); if (ok) { ok.setAttribute('tabindex', '-1'); ok.focus(); }
    });
  });

  // Precompila il tipo di macchina dal link (es. richiesta-intervento.html?macchina=Plotter)
  try {
    var q = new URLSearchParams(location.search), m = q.get('macchina'), b = q.get('marca');
    if (m) { var s = document.getElementById('f-tipo'); if (s) s.value = m; }
    if (b) { var s2 = document.getElementById('f-marca'); if (s2) s2.value = b; }
  } catch (e) {}

  // Video di sfondo: non partire se l'utente preferisce meno movimento
  var v = document.querySelector('.media video');
  if (v && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.pause(); }
})();
