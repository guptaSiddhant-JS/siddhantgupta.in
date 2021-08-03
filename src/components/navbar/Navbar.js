import React, { useState } from "react";
import styles from './Navbar.module.css'
const Navabar = () => { 
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };
      console.log(isActive);
  return (
      <div>
          <header >
              <div>Siddhant Gupta</div>
              <div className={`${styles.toggle} ${!isActive ? styles.active: ''}`} onClick={handleToggle}></div>
              <div  className={styles.navbar}>
                <ul>
                    <li> About   </li>
                    <li>  Project  </li>
                    <li>  Education  </li>
                    <li>   Contact </li>

                </ul>
              </div>
          </header>
      </div>
  );
}
export default Navabar;