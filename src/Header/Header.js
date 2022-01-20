import React, { memo } from "react";
import styles from "./Header.module.css";
import logo from "../Assets/Imagens/logo.svg";

const Header = () => {
  const menu = React.useRef()

  function showMenu() {
      menu.current.classList.toggle("active")
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <a href=".">
          <img className={styles.img} src={logo} alt="logo" />
        </a>
      </div>
      <span onClick={showMenu} className={styles.hamburguer}></span>
      <nav ref={menu} className={styles.nav}>
        <ul>
          <li>
            <a href=".">Features</a>
          </li>
          <li>
            <a href=".">Princing</a>
          </li>
          <li>
            <a href=".">Resources</a>
          </li>
        </ul>
        <div className={styles.userBox}>
          <a className={styles.login} href=".">
            Login
          </a>
          <a className={styles.button} href=".">Sign Up</a>
        </div>
      </nav>  
    </header>
  );
};

export default memo(Header);
