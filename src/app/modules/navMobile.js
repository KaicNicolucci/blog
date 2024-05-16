const btnMenu = document.querySelector('.mobile-menu');

btnMenu.addEventListener('click', toggleMenu);

export function toggleMenu() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active')
}
