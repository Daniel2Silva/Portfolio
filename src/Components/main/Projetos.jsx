import React from 'react';
import styles from './ProjetosCard.module.css';
import Button from '../Button/Button';
import ImgProjeto1 from '../../assets/projeto1.jpg';

const Projetos = () => {
  return (
    <section id="projetos">
      <div className={styles.projetos}>
        <h2>Meus Projetos</h2>
        <p>
          Aqui estão alguns dos meus projetos recentes e animadores como dev
          front-end. Eles mostram como eu foco no usuário e me esforço pela
          melhor experiência possível.
        </p>
      </div>
      <section className={styles.projetoCard}>
        <div className={styles.leftCard}>
          <div className={styles.infoCard}>
            <h3>Imobiliária</h3>
            <span>2024 - Front End</span>
            <p>
              No projeto VILLA, uma corretora de imóveis, desenvolvi o site
              sozinho usando HTML, CSS e JavaScript para a interface, e
              implementei um banco de dados com PHP e MySQL para gerenciar
              informações como imóveis e cadastros de usuários.
            </p>
          </div>
          <Button
            link={'https://daniel2silva.github.io/villa1/'}
            nome="Acessar Projeto"
          ></Button>
        </div>
        <div className={styles.imgCard}>
          <img src={ImgProjeto1} alt="" />
        </div>
      </section>
    </section>
  );
};

export default Projetos;
