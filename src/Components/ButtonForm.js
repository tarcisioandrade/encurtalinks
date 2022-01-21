import React from "react";
import styles from "./ButtonForm.module.css"

const ButtonForm = ({ children,  onClick, ...props}) => {
  return <button onClick={onClick} className={styles.button} {...props}>{children}</button>;
};

export default ButtonForm;
