import React from 'react';
import Navabar from '../../navbar/Navbar';
import styles from "./InfoDisplay.module.css";
const InfoDisplay = () =>{
    return (
        <div className={styles.container}>
            <Navabar />
        </div>
    );
}
export default InfoDisplay;