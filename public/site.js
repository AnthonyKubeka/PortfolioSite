(function () {
  var root = document.documentElement;

  // Theme toggle: saved choice wins, otherwise the system preference.
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var current = root.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // Live numbers from the demo's public snapshot. The HTML already holds
  // fallback values, so a failed fetch changes nothing.
  if (window.fetch) {
    fetch('https://demo.anthonykubeka.com/data/snapshot.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (snap) {
        if (!snap) return;
        [].forEach.call(document.querySelectorAll('[data-live]'), function (node) {
          var v = node.getAttribute('data-live').split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, snap);
          if (typeof v === 'number') node.textContent = v.toLocaleString('en-US');
        });
      })
      .catch(function () {});
  }
})();
