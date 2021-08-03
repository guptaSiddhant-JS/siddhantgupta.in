import React from 'react';
import Navabar from '../../navbar/Navbar';
import styles from "./InfoDisplay.module.css";
import About from '../../pages/about/About'
import Contact from "../../pages/contact/Contact";
import Project from '../../pages/projects/Projects';
import Education from '../../pages/education/Education';
import {    Route , Switch , Redirect } from "react-router-dom";
const InfoDisplay = () =>{
    return (
        <div className={styles.container}>
            <Navabar />
            <Switch >
                 <Route exact path='/about' component={About} />
                 <Route exact path='/project' component={Project} />
                 <Route exact path='/education' component={Education} />
                 <Route exact path='/Contact' component={Contact} />
                 <Redirect to='/about' />
            </Switch >
        </div>
    )
}
export default InfoDisplay;