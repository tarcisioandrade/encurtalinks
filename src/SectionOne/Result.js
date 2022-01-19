import React from "react";
import styles from "./Result.module.css";

const Result = ({ originalLink, shortLink }) => {
  const [copy, setCopy] = React.useState("");
  const button = React.useRef();

  async function copyClick() {
    setCopy(shortLink);
    await navigator.clipboard.writeText(shortLink);
    button.current.style.backgroundColor = "hsl(257, 27%, 26%)";
  }

  return (
    <div className={styles.result}>
      <div className={styles.resultItem}>
        <p className={styles.urlUser}>{originalLink}</p>
        <p className={styles.url}>{shortLink}</p>
        {copy ? (
          <button
            onClick={copyClick}
            ref={button}
            className={`${styles.button}`}
          >
            Copied!
          </button>
        ) : (
          <button onClick={copyClick} className={styles.button}>
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default Result;
