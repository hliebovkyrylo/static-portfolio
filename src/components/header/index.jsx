import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import styles from "./header.module.scss";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setScrolled(scrollTop >= 65);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={scrolled ? styles.headerScrolled : styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <nav>
                        <ul className={styles.nav}>
                            <li className={styles.nav__link}><Link className={styles.a} to="home" smooth={true}>Home</Link></li>
                            <li className={styles.nav__link}><Link className={styles.a} to="about" smooth={true}>About me</Link></li>
                            <li className={styles.nav__link}><Link className={styles.a} to="projects" smooth={true}>My projects</Link></li>
                            <li className={styles.nav__link}><Link className={styles.a} to="contact" smooth={true}>Contact me</Link></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
};