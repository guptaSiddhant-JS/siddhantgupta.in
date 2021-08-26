import React from 'react';
import styles from './SocialMedia.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedinIn, 
    faGithubAlt,
  } from "@fortawesome/free-brands-svg-icons";
const SocialMedia = () =>{
  return (
      <div className={styles.sm__container}>
        <ul>
            <li><a href='https://www.linkedin.com/in/siddhant-gupta-9a0128206/'><FontAwesomeIcon className={styles.icons} icon={faLinkedinIn} size="2x" /></a></li>
            <li><a href='https://github.com/guptaSiddhant-JS'><FontAwesomeIcon className={styles.icons} icon={faGithubAlt} size="2x" /></a></li>
            <li><a href='https://www.instagram.com/micku.sg/'><FontAwesomeIcon className={styles.icons}icon={faInstagram} size="2x" /></a></li>
            
        </ul>   
      </div>
  );
}
export default SocialMedia;