import React from "react";

import styles from "./home.module.scss";

import { Info, AboutMe, Skills, Project } from "../../components/index";
import avatar from "../../assets/images/avatar/photo.jpg";

export const Home = () => {
    return (
        <>
            <div className={styles.intro}>
                <div className={styles.container}>
                    <div className={styles.intro__inner}>
                        <Info
                            avatar={avatar}
                            name={'Hliebov Kyrylo'}
                            description={'Web-developer'}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.container}>
                    <h1>About me</h1>
                    <AboutMe 
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Imperdiet nulla malesuada pellentesque elit. Fringilla urna porttitor rhoncus dolor purus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Ut tristique et egestas quis ipsum. Interdum velit laoreet id donec ultrices tincidunt arcu non. Eu consequat ac felis donec et odio. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. '}
                    />
                    {[...Array(4)].map(() => {
                        return (
                            <Skills
                                skillName={'JavaScript'} 
                                skillGrade={3}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={styles.projects}>
                <div className={styles.container}>
                    <h1>My projects</h1>
                    <div className={styles.projects__inner}>
                        {[...Array(5)].map(() => {
                            return (
                                <Project
                                    image={'https://img.freepik.com/free-psd/business-company-landing-page-template_23-2148924995.jpg'} 
                                    projectDescription={'The website was created to develop your own skills'}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
};