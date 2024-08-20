const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const menuClose = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
    dropdownMenu.classList.add('show');
    dropdownMenu.classList.remove('hide');
});

menuClose.addEventListener('click', () => {
    dropdownMenu.classList.add('hide');
    dropdownMenu.classList.remove('show');
});
