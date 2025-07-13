import Lazyload from './lazyload.js';
new Lazyload();
document.toggleMenu = toggleMenu;
function toggleMenu() {
    document.querySelectorAll('.js-hamburger').forEach(
        function(el) {
            el.classList.toggle('is-active');
            let mobile_menu = document.querySelector('.mobile-menu');
            if (mobile_menu.classList.contains('open')) {
                mobile_menu.classList.remove('open');
            } else {
                mobile_menu.classList.add('open');
            }
        }
    )
}