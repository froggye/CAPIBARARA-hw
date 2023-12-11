
const header = document.querySelector('.header') as HTMLDivElement | null;
const headerWrapper = document.querySelector('.header-wrapper') as HTMLDivElement | null;
const headerTop = document.querySelector('.header__top') as HTMLDivElement | null;
const headerMenu = document.querySelector('.header__menu') as HTMLDivElement | null;
const heroSection = document.querySelector('.hero') as HTMLDivElement | null;

function openMenu (): void {
    let height = header?.offsetHeight;

    header?.classList.toggle('menu-expanded');
    headerWrapper?.classList.toggle('drop-shadow--2xl');
    headerWrapper?.classList.toggle('menu-expanded');
    headerTop?.classList.toggle('menu-expanded');
    headerMenu?.classList.toggle('menu-expanded');

    const margin: string = (header?.classList.contains('menu-expanded'))
        ? `margin-top: ${height}px;`
        : `margin-top: 0;`;
    console.log(heroSection);
    heroSection?.setAttribute("style", margin);
}

const menuButton = document.getElementById("menu-toggle");
menuButton?.addEventListener("click", openMenu);

function removeClassIfContains (element: HTMLDivElement | null, className: string): void {
    if (element?.classList.contains(className)) {
        element?.classList.remove(className);
    }
}

function removeHeaderClasses (): void {
    removeClassIfContains(header, 'menu-expanded');
    removeClassIfContains(headerWrapper, 'drop-shadow--2xl');
    removeClassIfContains(headerWrapper, 'menu-expanded');
    removeClassIfContains(headerTop, 'menu-expanded');
    removeClassIfContains(headerMenu, 'menu-expanded');

    heroSection?.setAttribute("style", 'margin-top: 0;');
}

window.onresize = function(event) {
    if (window.matchMedia("(max-width: 768px)").matches) {
        return;
    }
    removeHeaderClasses();
}

const menuItems = document.getElementsByClassName("header__menu-item");
for (let i: number = 0; i < menuItems.length; i++) {
    menuItems[i]?.addEventListener('click', function(){
        if (window.matchMedia("(min-width: 768px)").matches) {
            return;
        }
        removeHeaderClasses();
    });
}