import React from "react";

import styles from "./project.module.scss";

export const Project = ({
    image,
    projectDescription,
    projectName,
    developer,
    customer,
}) => {
    const isFullProject = false;

    return (
        <>
            <button className={styles.project}>
                <div className={styles.projectImage}>
                    <img className={styles.image} src={image} alt="" />
                </div>
            </button>
        </>
    )
};