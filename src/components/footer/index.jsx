import React from "react";

import styles from "./footer.module.scss";

import inst from "../../assets/images/icons/inst.svg";
import github from "../../assets/images/icons/github.svg";
import tg from "../../assets/images/icons/tg.svg";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__text}>kirilglebov06@gmail.com</div>
                <div className={styles.footer__icons}>
                    <a target="_blank" href="https://www.instagram.com/xenoniiii/"><img src={inst} alt="" /></a>
                    <a target="_blank" href="https://github.com/hliebovkyrylo"><img className={styles.icons} src={github} alt="" /></a>
                    <a target="_blank" href="https://t.me/xenoniiii"><img src={tg} alt="" /></a>
                </div>
            </div>
        </footer>
    )
};