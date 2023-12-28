import { useState, useEffect } from "react";

const Header = () => {
    const [isActive, setActive] = useState(false);
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

    useEffect(() => {
        const mediaWatcher = window.matchMedia("(max-width: 768px)");
        setIsNarrowScreen(mediaWatcher.matches);

        const updateIsNarrowScreen = (e) => {
            setIsNarrowScreen(e.matches);
        }

        if (mediaWatcher.addEventListener) {
            mediaWatcher.addEventListener('change', updateIsNarrowScreen)
            if (!isNarrowScreen) {
                setActive(false);
            }
            return function cleanup() {
                mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
            }
        } else {
            // Apple, Safari
            mediaWatcher.addListener(updateIsNarrowScreen);
            if (!isNarrowScreen) {
                setActive(false);
            }
            return function cleanup() {
                mediaWatcher.removeListener(updateIsNarrowScreen)
            }
        }
    });

    const handleToggle = () => {
        if (isNarrowScreen) {
            setActive(!isActive);
        }
    }

    type navItemsProps = {
        href: string,
        name: string
    }

    const navItems: navItemsProps[] = [
        {
            href: '#experience',
            name: 'Experience'
        },
        {
            href: '#work',
            name: 'Work'
        },
        {
            href: '#testimonials',
            name: 'Testimonials'
        },
        {
            href: '#contacts',
            name: 'Contact'
        },
    ];

    return (

        <section className={
            isActive
                ? 'container header menu-expanded'
                : 'container header'
        }>
            <div className={
                isActive
                    ? 'header-wrapper drop-shadow--2xl menu-expanded'
                    : 'header-wrapper'
            }>
                <div className={
                    isActive
                        ? 'header__top menu-expanded'
                        : 'header__top'
                }>
                    <img src="src/img/logo.svg" alt="Capibarara.com"/>
                        <button id="menu-toggle" className="header__menu-mobile"
                                onClick={handleToggle}></button>
                </div>
                <nav className={
                    isActive
                        ? 'header__menu body2--medium menu-expanded'
                        : 'header__menu body2--medium'
                }>
                    {navItems.map((item) => (
                        <a href={item.href} className="header__menu-item" onClick={handleToggle} key={item.name}>
                            {item.name}
                        </a>
                        ))}
                </nav>
            </div>
        </section>
    )
}

export default Header;