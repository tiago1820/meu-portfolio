import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Tiago</h1>
        <p className={styles.description}>
        un desarrollador full-stack con experiencia usando React y NodeJS. ¡Ponte en contacto para obtener mas información!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contacto
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
