// Set the theme before first paint. A saved choice wins; otherwise follow the system.
// The design language is dark unless data-theme="light" is set, so always set it.
(function () {
  var theme = null;
  try { theme = localStorage.getItem('theme'); } catch (e) {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
})();
