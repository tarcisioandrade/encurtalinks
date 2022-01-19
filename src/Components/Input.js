import React from "react";
import styles from "./Input.module.css";

const Input = ({ name, id, value, onBlur, onChange, error, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${error && "inputError"}`}
        type="text"
        name={name}
        id={id}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
