import React from 'react';
import Apresentacao from './main/Apresentacao';
import Projetos from './main/Projetos';
import ScrollAnimado from './Animacao/Animacaoes';
import Sobre from './main/Sobre';
import Habilidades from './main/Habilidades';
import Contato from './main/Contato';

const Main = () => {
  return (
    <section className="container">
      <Apresentacao />
      <ScrollAnimado>
        <Projetos />
      </ScrollAnimado>
      <ScrollAnimado>
        <Sobre />
      </ScrollAnimado>
      <ScrollAnimado>
        <Habilidades />
      </ScrollAnimado>
      <ScrollAnimado>
        <Contato />
      </ScrollAnimado>
    </section>
  );
};

export default Main;
