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
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
