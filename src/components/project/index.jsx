import React from "react";

import styles from "./project.module.scss";

export const Project = ({
    image,
    projectHref
}) => {

    return (
        <div className={styles.pr}>
            <a target="_blank" href={projectHref} className={styles.project}>
                <div className={styles.projectImage}>
                    <img className={styles.image} src={image} alt="" />
                </div>
            </a>
        </div>
    )
};