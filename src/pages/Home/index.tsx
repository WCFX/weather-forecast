import React from 'react';

import {
  Container,
  SectionResults, 
  SectionStates,
  FormWeather,
  InputWeather,
  ButtonSearch, 
  SearchIcon 
} from './styles';

const Home: React.FC = () => {
  return(
    <Container>
      <main>

        <SectionResults>
          <h1>Previsão do tempo</h1>
          <FormWeather>
            <InputWeather 
              placeholder="Insira aqui o nome da cidade"
            />
            <ButtonSearch>
              <SearchIcon />
            </ButtonSearch>
          </FormWeather>
        </SectionResults>

        <SectionStates>
          <h1>Capitais</h1>
        </SectionStates>
      </main>
    </Container>
  );
};

export default Home;