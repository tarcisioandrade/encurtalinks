import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <a {...props} className={styles.button} href=".">
      {children}
    </a>
  );
};

export default Button;
