/* Minimal interactions: theme toggle, header state, scroll reveal. */
(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var header = document.querySelector('.site-header');

  /* ---- Theme ---- */
  function currentTheme() {
    return root.dataset.theme === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (toggle) {
      toggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      );
    }
    try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
  }

  applyTheme(currentTheme());

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  /* Follow system preference only if the visitor never chose manually. */
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  var onChange = function (event) {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) { /* ignore */ }
    if (!saved) {
      root.dataset.theme = event.matches ? 'dark' : 'light';
    }
  };
  if (media.addEventListener) media.addEventListener('change', onChange);
  else if (media.addListener) media.addListener(onChange);

  /* ---- Header border on scroll ---- */
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Reveal on scroll ---- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
