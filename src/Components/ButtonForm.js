import React from "react";
import styles from "./ButtonForm.module.css"

const ButtonForm = ({ children, ...props }) => {
  return <button className={styles.button} {...props}>{children}</button>;
};

export default ButtonForm;
