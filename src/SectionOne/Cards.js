import React from "react";
import styles from "./Cards.module.css";
import foto1 from "../Assets/Imagens/icon-brand-recognition.svg";
import foto2 from "../Assets/Imagens/icon-detailed-records.svg";
import foto3 from "../Assets/Imagens/icon-fully-customizable.svg";

const Cards = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headerCards}>
        <h1 className={styles.title}>Advanced Statistics</h1>
        <p className={styles.subtitle}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className={styles.containerCards}>
        <div className={styles.card}>
          <div className={styles.imgBox}>
            <img src={foto1} alt="" />
          </div>
          <p className={styles.cardTitle}>Brand Recognition</p>
          <p className={styles.cardText}>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.imgBox}>
            <img src={foto2} alt="" />
          </div>
          <p className={styles.cardTitle}>Detailed Records</p>
          <p className={styles.cardText}>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.imgBox}>
            <img src={foto3} alt="" />
          </div>
          <p className={styles.cardTitle}>Fully Customizable</p>
          <p className={styles.cardText}>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
