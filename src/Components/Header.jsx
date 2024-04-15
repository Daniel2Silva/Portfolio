import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <section className="container">
      <nav>
        <ul className={styles.nav}>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <span className={styles.contatoColor}>
            <a href="#contato">Contato</a>
          </span>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
