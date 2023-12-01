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

    heroSection.style.marginTop = header.classList.contains('menu-expanded')
        ? height + 'px'
        : '0';
}

const menuButton = document.getElementById("menu-toggle");
menuButton.addEventListener("click", openMenu);

function removeHeaderClasses () {
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

window.onresize = function(event) {
    if (window.matchMedia("(max-width: 768px)").matches) {
        return;
    }
    removeHeaderClasses();
}

const menuItems = document.getElementsByClassName("header__menu-item");

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(){
        if (window.matchMedia("(min-width: 768px)").matches) {
            return;
        }
        removeHeaderClasses();
    });
}