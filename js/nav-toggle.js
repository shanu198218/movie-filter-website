export function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

export function initNavAutoClose() {
  const navLinks = document.querySelectorAll('#navLinks a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('active');
    });
  });

  window.addEventListener('click', function (event) {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      navLinks.classList.remove('active');
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  initNavAutoClose();

  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }
});