import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <section className="container">
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="projetos" smooth="true" duration={500}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="sobre" smooth="true" duration={500}>
              Sobre
            </Link>
          </li>
          <span className={styles.contatoColor}>
            <Link to="contato" smooth="true" duration={500}>
              Contato
            </Link>
          </span>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
