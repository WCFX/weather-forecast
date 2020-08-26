import React from 'react';

import { Container, SearchIcon } from './styles';

const Home: React.FC = () => {
  return(
    <Container>
      <main>
        <section>
          <h1>Previsão do tempo</h1>
          <form>
            <input type="text" placeholder="Insira aqui o nome da cidade" />
            <SearchIcon />
          </form>
        </section>

        <section>
          <h1>Capitais</h1>
        </section>


      </main>
    </Container>
  );
};

export default Home;