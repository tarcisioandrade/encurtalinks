import React from "react";
import styles from "./Result.module.css";

const Result = ({ links }) => {
  
  async function copyClick({ target }) {
    await navigator.clipboard.writeText(target.previousSibling.innerText);
    target.style.backgroundColor = "hsl(257, 27%, 26%)";
    target.innerText = "Copied!";
  }

  return (
    <>
      {links.map((link, index) => (
        <div className={styles.resultItem} key={index}>
          <p className={styles.urlUser}>{link[0]}</p>
          <p className={styles.url}>{link[1]}</p>
          <button onClick={copyClick} className={styles.button}>
            Copy
          </button>
        </div>
      ))}
    </>
  );
};

export default Result;
