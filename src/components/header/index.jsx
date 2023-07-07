import React from "react";

import styles from "./header.module.scss";

import logo from "../../assets/images/logo/H.png";

export const Header = () => {
    const isAdmin = false;

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <img src={logo} alt="" />
                    <nav>
                        {isAdmin ? (
                            <ul className={styles.nav}>
                                <li className={styles.nav__link}><a href="#">Home</a></li>
                                <li className={styles.nav__link}><a href="#">Messages</a></li>
                                <li className={styles.nav__link}><a href="#">Edit info</a></li>
                                <li className={styles.nav__link}><a href="#">Edit projects</a></li>
                            </ul>
                        ) : (
                            <ul className={styles.nav}>
                                <li className={styles.nav__link}><a href="#">Home</a></li>
                                <li className={styles.nav__link}><a href="#">About me</a></li>
                                <li className={styles.nav__link}><a href="#">My projects</a></li>
                                <li className={styles.nav__link}><a href="#">Contact me</a></li>
                            </ul>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};