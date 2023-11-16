'use strict';

const header = document.querySelector('.header');
const headerWrapper = document.querySelector('.header-wrapper');
const headerTop = document.querySelector('.header__top');
const headerMenu = document.querySelector('.header__menu');
const heroSection = document.querySelector('.hero');

function openMenu () {
    let height = header.offsetHeight;

    header.classList.toggle('menu-expanded');
    headerWrapper.classList.toggle('drop-shadow--2xl');
    headerWrapper.classList.toggle('menu-expanded');
    headerTop.classList.toggle('menu-expanded');
    headerMenu.classList.toggle('menu-expanded');

    if (header.classList.contains('menu-expanded')){
        heroSection.style.marginTop = height + 'px';
    }
    else {
        heroSection.style.marginTop = '0';
    }
}

window.onresize = function(event) {
    if (window.innerWidth > 768) {
        if (header.classList.contains('menu-expanded')){
            header.classList.remove('menu-expanded');
        }
        if (headerWrapper.classList.contains('drop-shadow--2xl')){
            headerWrapper.classList.remove('drop-shadow--2xl');
        }
        if (headerWrapper.classList.contains('menu-expanded')){
            headerWrapper.classList.remove('menu-expanded');
        }
        if (headerTop.classList.contains('menu-expanded')){
            headerTop.classList.remove('menu-expanded');
        }
        if (headerMenu.classList.contains('menu-expanded')){
            headerMenu.classList.remove('menu-expanded');
        }
        heroSection.style.marginTop = '0';
    }
};