import React from "react";

import styles from "./info.module.scss";

import noAvatar from "../../assets/images/avatar/no-avatar.png";
import inst from "../../assets/images/icons/inst.svg";
import github from "../../assets/images/icons/github.svg";
import tg from "../../assets/images/icons/tg.svg";

export const Info = ({
    avatar,
    name,
    description
}) => {
    return (
        <div className={styles.info}>
            <img className={styles.info__photo} src={avatar || noAvatar} alt="" />
            <div className={styles.info__description}>
                <span className={styles.info__name}>{name}</span>
                <div className={styles.links}>
                    <a target="_blank" className={styles.link} href="https://www.instagram.com/xenoniiii/">
                        <img src={inst} alt="" />
                    </a>
                    <a target="_blank" className={styles.link} href="https://github.com/hliebovkyrylo">
                        <img src={github} alt="" />
                    </a>
                    <a target="_blank" className={styles.link} href="https://t.me/xenoniiii">
                        <img src={tg} alt="" />
                    </a>
                </div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    )
};