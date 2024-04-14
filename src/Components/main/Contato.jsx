import React from 'react';
import styles from './Contato.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contato = () => {
  return (
    <section className={styles.contato} id="contato">
      <div className={styles.contatoCard}>
        <div>
          <h2>Vamos bater um papo!</h2>
          <p>
            Em busca de oportunidades como desenvolvedor front-end! <br /> Estou
            pronto para colaborar em projetos empolgantes <br /> ou responder
            suas dúvidas. <br /> Vamos transformar suas ideias em experiências
            digitais incríveis juntos. <br /> Aguardo seu contato!
          </p>
        </div>
        <div className={styles.contatoRedes}>
          <span className={styles.contatoEmail}>dn2fe@icloud.com</span>
          <span className={styles.contatoIcone}>
            <LinkedInIcon />
          </span>
          <span className={styles.contatoIcone}>
            <GitHubIcon />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contato;
