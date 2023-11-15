const menuButton = document.querySelector('.menu-button');
const breadcrumbs = document.querySelector('.breadcrumbs');

const isMenuOpen = localStorage.getItem('menuOpen');

if (isMenuOpen === 'true') {
  breadcrumbs.style.display = 'block';
  menuButton.classList.add('open');
} else {
  breadcrumbs.style.display = 'none';
  menuButton.classList.remove('open');
}

menuButton.addEventListener('click', function() {
  breadcrumbs.style.display = (breadcrumbs.style.display === 'none' || breadcrumbs.style.display === '') ? 'block' : 'none';
  menuButton.classList.toggle('open');

  localStorage.setItem('menuOpen', menuButton.classList.contains('open'));
});
