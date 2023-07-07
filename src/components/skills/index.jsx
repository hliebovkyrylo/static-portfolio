import React from "react";

import styles from "./skills.module.scss";

export const Skills = ({ skillName, skillGrade }) => {
    const getLineWidth = () => {
        if (skillGrade === 1) {
            return { width: '20%', color: '#B2AD35' };
        } else if (skillGrade === 2) {
            return { width: '40%', color: '#C9C342' };
        } else if (skillGrade === 3) {
            return { width: '60%', color: '#1D6375' };
        } else if (skillGrade === 4) {
            return { width: '80%', color: '#2891AB' };
        } else if (skillGrade === 5) {
            return { width: '100%', color: '#30B7D9' };
        } else {
            return { width: '0%', color: '0' };
        }
    };
  
    const lineStyle = getLineWidth();
  
    return (
        <>
            <div className={styles.skills}>
                <span className={styles.skillname}>{skillName}</span>
                <div className={styles.line} style={{ width: lineStyle.width, backgroundColor: lineStyle.color }}></div>
            </div>
        </>
    );
};