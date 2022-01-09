import React from "react";
import styles from "../css/button.module.css";
import logo from "../../src/logo.png";
const HomeButton = (props) => (
  <a className={styles.logo} href='/'>
    <img
      src={logo}
      alt='Youtube Logo'
      className='logo'
      style={{ width: "50px", marginRight: "10px" }}
    />
    <span className={styles.title}>Youtube</span>
  </a>
);

export default HomeButton;
