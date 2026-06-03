// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinksEl = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinksEl.classList.toggle('open'));
}

// Typewriter for hero tag
const tagEl = document.querySelector('.hero-tag-text');
if (tagEl) {
  const text = tagEl.textContent;
  tagEl.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) { tagEl.textContent += text[i++]; setTimeout(type, 55); }
  };
  setTimeout(type, 400);
}
