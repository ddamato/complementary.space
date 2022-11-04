const root = document.getElementById('main');
const h3s = document.querySelectorAll('h3');
const lis = document.querySelectorAll('.contents li');
function callback(entries) {
  entries.forEach(({ target, isIntersecting }) => {
    if (!isIntersecting) return;
    lis.forEach((li) => {
      li.removeAttribute('aria-current');
      target.textContent.trim() === li.textContent.trim() && li.setAttribute('aria-current', 'true');
    });
  })
};
const observer = new IntersectionObserver(callback, { root });
h3s.forEach((h3) => observer.observe(h3));