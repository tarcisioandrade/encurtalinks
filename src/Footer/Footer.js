import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../Assets/Imagens/logo.svg";
import { ReactComponent as Facebook } from "../Assets/Imagens/icon-facebook.svg";
import { ReactComponent as Instagram } from "../Assets/Imagens/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../Assets/Imagens/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../Assets/Imagens/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.logo}>
          <a href=".">
            <Logo />
          </a>
        </div>
        <div className={styles.ulBox}>
          <ul className={styles.ulLinks}>
            <p className={styles.title}>Features</p>
            <li>
              <a href=".">Link Shortening</a>
            </li>
            <li>
              <a href=".">Branded Links</a>
            </li>
            <li>
              <a href=".">Analytics</a>
            </li>
          </ul>
          <ul className={styles.ulLinks}>
            <p className={styles.title}>Resources</p>
            <li>
              <a href=".">Blog</a>
            </li>
            <li>
              <a href=".">Developers</a>
            </li>
            <li>
              <a href=".">Support</a>
            </li>
          </ul>
          <ul className={styles.ulLinks}>
            <p className={styles.title}>Company</p>
            <li>
              <a href=".">About</a>
            </li>
            <li>
              <a href=".">Our Team</a>
            </li>
            <li>
              <a href=".">Careers</a>
            </li>
            <li>
              <a href=".">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.boxSociais}>
          <div>
            <Facebook />
          </div>
          <div>
            <Twitter />
          </div>
          <div>
            <Pinterest />
          </div>
          <div>
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
