import React from 'react';
import styles from './Apresentacao.module.css';
import Perfil from '../../assets/perfil.png';

const Apresentacao = () => {
  return (
    <section className={styles.container}>
      <img src={Perfil} alt="" />
      <h1 className={`${styles.apresentacao} tittleApresentacao`}>
        Olá! Sou Daniel, Desenvolvedor Front End{' '}
      </h1>
      <p>Localizado no Rio De Janeiro</p>
    </section>
  );
};

export default Apresentacao;
