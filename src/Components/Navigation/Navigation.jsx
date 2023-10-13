import React from "react";
import styles from './Navigation.module.css'


function Navigation() {
  return (
    <nav className= {`${styles.navigation} container`}>
      <div className="logo">
        <img src="images/Frame 2 1.png" alt="logo image" />
      </div>

      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
