import React from "react";

import styles from "./aboutMe.module.scss";

export const AboutMe = ({
    text,
}) => {
    return (
        <>
            <p className={styles.aboutMe__text}>{text}</p>
            <h2>My skills</h2>
            {/* MY SKILLS */}
            <div className={styles.skillGrade}>
                <div className={styles.grades}>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>
        </>
    )
};