import React from 'react';
import imgPerfil from '../../assets/perfil.png';
import styles from './Sobremim.module.css';

const Sobre = () => {
  return (
    <section className={styles.sobreMim} id="sobre">
      <h2>Sobre mim</h2>
      <div className={styles.sobremimInfos}>
        <p>
          Com mais de 9 meses de experiência como desenvolvedor freelancer e
          cursando Análise e Desenvolvimento de Sistemas na Estácio, estou
          empenhado em criar soluções envolventes e funcionais que atendam às
          necessidades dos usuários.
        </p>
        <img className={styles.imgPerfil} src={imgPerfil} alt="" />
      </div>
    </section>
  );
};

export default Sobre;
