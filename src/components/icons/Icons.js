import React from "react";
import styles from './Icons.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedinIn, 
    faGithubAlt,
    faJava,
    faPython,
    faHa,
    faJs,
    faHtml5,
    faReact,
    faCss3,
    faNodeJs,
    faPhp,
  } from "@fortawesome/free-brands-svg-icons";

const CIcons = props =>{
   const title = props.title;
    return(
        <div className={styles.cicon__container}>
            <div className={styles.cicon__icon}>
        
            {title === 'Java' && <FontAwesomeIcon  icon={faJava} size="2x" />}
            {title === 'Python' && <FontAwesomeIcon  icon={faPython} size="2x" />}
            {title === 'JavaScript' && <FontAwesomeIcon  icon={faJs} size="2x" />}
            {title === 'React Js' && <FontAwesomeIcon  icon={faReact} size="2x" />}
            {title === 'Html' && <FontAwesomeIcon  icon={faHtml5} size="2x" />}
            {title === 'Css' && <FontAwesomeIcon  icon={faCss3} size="2x" />}
            {title === 'node js' && <FontAwesomeIcon  icon={faNodeJs} size="2x" />}
            {title === 'php' && <FontAwesomeIcon  icon={faPhp} size="2x" />}

            </div>
            <p className={styles.cicon__title} >{title}</p>
        </div>
    );
   
}
export default CIcons;