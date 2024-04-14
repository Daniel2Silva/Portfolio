import React from 'react';
import styles from './Button.module.css';
const Button = ({ link, nome }) => {
  return (
    <a href={link}>
      <button className={styles.button}>{nome}</button>
    </a>
  );
};

export default Button;
