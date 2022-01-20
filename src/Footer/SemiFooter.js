import React from "react";
import Button from "../Components/Button";
import styles from "./SemiFooter.module.css";

const SemiFooter = () => {
  return (
    <section className={styles.semiFooter}>
      <div className="container">
        <h1 className={styles.title}>Boost your links today</h1>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default SemiFooter;
