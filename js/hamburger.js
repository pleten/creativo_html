function toggleHamburgerMenu() {
	document.querySelector('.hamburger').classList.toggle('is-active');
	document.querySelector('.hamburger_menu').classList.toggle('is-active');
}

document.querySelector('.hamburger').addEventListener('click', toggleHamburgerMenu);
document.querySelector('.header_navigation_list').addEventListener('click', toggleHamburgerMenu);
