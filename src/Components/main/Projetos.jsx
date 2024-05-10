import React from 'react';
import styles from './ProjetosCard.module.css';
import Button from '../Button/Button';
import ImgProjeto1 from '../../assets/projeto1.png';
import ImgProjeto2 from '../../assets/projeto2.png';
const Projetos = () => {
  return (
    <section id="projetos" className={styles.pjts}>
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
            <h3>Ecommerce</h3>
            <span>2024 - Front End</span>
            <p>
              O site oferece aos usuários uma experiência completa de compras
              online, permitindo encontrar uma ampla variedade de produtos,
              criar contas de usuário personalizadas e desfrutar de uma
              interface intuitiva e amigável para navegação e compra. <br />
              <br />
              Tecnologias : React.JS,HTML5, CSS3, Javascript, controle de versão
              : git
            </p>
          </div>
          <Button
            link={'https://daniel2silva.github.io/redstore2/'}
            nome="Acessar Projeto"
          ></Button>
        </div>
        <div className={styles.imgCard}>
          <img src={ImgProjeto1} alt="" />
        </div>
      </section>
      <section className={styles.projetoCard}>
        <div className={styles.leftCard}>
          <div className={styles.infoCard}>
            <h3>Streaming</h3>
            <span>2024 - Front End</span>
            <p>
              O site permite que o usuário explore uma ampla variedade de filmes
              e séries, além de adicionar e remover itens facilmente de sua
              lista de favoritos. <br />
              <br />
              Tecnologias : React.JS,HTML5, Sass, Javascript, controle de
              versão: git
            </p>
          </div>
          <Button
            link={'https://daniel2silva.github.io/redstore2/'}
            nome="Acessar Projeto"
          ></Button>
        </div>
        <div className={styles.imgCard}>
          <img src={ImgProjeto2} alt="" />
        </div>
      </section>
    </section>
  );
};

export default Projetos;
