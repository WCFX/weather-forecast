import React from 'react';

import {
  Container,
  Main,
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
      <Main>
        <SectionResults>
          <FormWeather>
            <h1>Previsão do tempo</h1>
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

      </Main>
    </Container>
  );
};

export default Home;