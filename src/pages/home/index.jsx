import React from "react";

import styles from "./home.module.scss";

import { Info, AboutMe, Skills, Project, Footer } from "../../components/index";

import avatar from "../../assets/images/avatar/photo.jpg";
import project1 from "../../assets/images/projectsImage/1.jpg";
import project2 from "../../assets/images/projectsImage/2.jpg";
import project3 from "../../assets/images/projectsImage/3.jpg";
import project4 from "../../assets/images/projectsImage/4.jpg";
import project5 from "../../assets/images/projectsImage/5.jpg";
import project6 from "../../assets/images/projectsImage/6.png";

export const Home = () => {
    return (
        <>
            <div className={styles.intro} id="home">
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
                <div className={styles.container} id="about">
                    <h1>About me</h1>
                    <AboutMe 
                        text={'I am Kyrylo Hliebov, a web developer with experience since autumn 2022. I am 17 years old, successfully graduated from the Verkhnedneprovsky Lyceum №2. I have developed a range of dynamic, static and responsive websites that attract users with their stylish design and functionality. I am proficient in programming languages such as HTML, CSS and JavaScript and have experience with popular frameworks including React and Node js.'}
                    />
                    <Skills
                        skillName={'HTML'} 
                        skillGrade={4}
                    />
                    <Skills
                        skillName={'CSS'} 
                        skillGrade={4}
                    />
                    <Skills
                        skillName={'JavaScript'} 
                        skillGrade={3}
                    />
                    <Skills
                        skillName={'React'} 
                        skillGrade={4}
                    />
                    <Skills
                        skillName={'Node.js'} 
                        skillGrade={3}
                    />
                    <h2>Education</h2>
                    <p className={styles.aboutMe__text}>I independently developed various websites, which helped me consolidate and apply my knowledge in practice. This self-learning path has made me more confident in my skills and allowed me to gain hands-on experience in building web applications. I also took a few courses from ITVDN where I got some more experience.</p>
                </div>
            </div>
            <div className={styles.projects} id="projects">
                <div className={styles.container}>
                    <h1>My projects</h1>
                    <div className={styles.projects__inner}>
                        <Project
                            image={project1} 
                            projectHref={'https://hliebovkyrylo.github.io/Finsweet/'}
                        />
                        <Project
                            image={project5} 
                            projectHref={'https://hliebovkyrylo.github.io/upay/'}
                        />
                        <Project
                            image={project4} 
                            projectHref={'https://spline-pi.vercel.app'}
                        />
                        <Project
                            image={project2} 
                            projectHref={'#'}
                        />
                        <Project
                            image={project3} 
                            projectHref={'https://hliebovkyrylo.github.io/Travel-agency/'}
                        />
                        <Project
                            image={project6} 
                            projectHref={'https://hliebovkyrylo.github.io/wedding_website/'}
                        />
                    </div>
                </div>
            </div>
            <div id="contact"><Footer></Footer></div>
        </>
    )
};