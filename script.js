const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('closeMenu');
const navLinks = nav.querySelectorAll('a');

function openMenu() {
  nav.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
overlay.addEventListener('click', closeMenuFunc);

navLinks.forEach(link => {
  link.addEventListener('click', closeMenuFunc);
});
