import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
const Navabar = () => { 
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };
  return (
      <div>
          <header >
            
              <div className={`${styles.toggle} ${!isActive ? styles.active: ''}`} onClick={handleToggle}></div>
              <div  className={`${styles.navbar} ${!isActive ? styles.active: ''}`}>
                <ul>
                    <li> <Link to='/about'>About</Link>   </li>
                    <li> <Link to='/project'>Project</Link>   </li>
                    <li> <Link to='/education'>Education</Link>   </li>
                    <li> <Link to='/contact'> Contact </Link> </li>
                   
                </ul>
              </div>
          </header>
      </div>
  );
}
export default Navabar;