import React from 'react';
import styles from './ButtonSkills.module.css';

const ButtonSkills = ({ skill }) => {
  return (
    <div className={styles.buttonSkill}>
      <span>.</span>
      <p>{skill}</p>
    </div>
  );
};

export default ButtonSkills;
