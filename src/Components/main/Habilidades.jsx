import React from 'react';
import ButtonSkills from '../Button/ButtonSkills';
import styles from './Habilidades.module.css';

const Habilidades = () => {
  return (
    <section className={styles.habilidadesContainer}>
      <h3>Minhas Habilidades</h3>
      <section className={styles.skills}>
        <div className={styles.skillsItems}>
          <ButtonSkills skill="HTML,CSS, JavaScript" />
          <ButtonSkills skill="React" />
          <ButtonSkills skill="Sass, bootstrap" />
          <ButtonSkills skill="Automação Front End" />
        </div>
        <div className={styles.skillsItems}>
          <ButtonSkills skill="Figma" />
          <ButtonSkills skill="Node.js" />
          <ButtonSkills skill="(UX)Experiencia do Usuario" />
          <ButtonSkills skill="(UI) Interface De Usuario" />
        </div>
      </section>
    </section>
  );
};

export default Habilidades;
