import React from 'react';
import styles from './SocialMedia.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
const SocialMedia = () =>{
  return (
      <div >
         <FontAwesomeIcon icon={faYoutube} size="2x" />
         <FontAwesomeIcon icon={faFacebook} size="2x" />
         <FontAwesomeIcon icon={faTwitter} size="2x" />
         <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
  );
}
export default SocialMedia;