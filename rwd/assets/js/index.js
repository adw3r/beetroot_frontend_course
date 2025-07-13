import Lazyload from './lazyload.js';

const lazyload = new Lazyload({});
lazyload.update()

const toggleMenu = () => {
    document.querySelectorAll('.js-hamburger').forEach(
        function (el) {
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
document.toggleMenu = toggleMenu;

const getBgImageForWidth = (width) => {
    if (width <= 425) {
        return 'assets/images/phone/bg-image.jpg';
    } else if (width <= 768) {
        return 'assets/images/tablet/bg-image.jpg';
    } else {
        return 'assets/images/desktop/bg-image.jpg';
    }
};

const bg_element = document.querySelector('.hero.lazy');

function updateBg() {
    bg_element.dataset.bg = getBgImageForWidth(window.innerWidth);
    bg_element.removeAttribute('data-ll-status');        // если есть кастомные метки
    lazyload.update();
}

window.addEventListener('resize', () => {
    updateBg();
});