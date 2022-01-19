import React, { memo } from "react";
import styles from "./Header.module.css";
import logo from "../Assets/Imagens/logo.svg";
import Button from "../Components/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <a href="."><img className={styles.img} src={logo} alt="logo" /></a>
      </div>
      <nav className={styles.nav}>
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
      </nav>
      <div className={styles.userBox}>
        <a className={styles.login} href=".">
          Login
        </a>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default memo(Header);
