import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Main = styled.main``;

export const SectionResults = styled.section`
  /* height: 40%; */
  /* background-image: linear-gradient( to bottom, var(--orangeStrong), var(--orangeMedium)); */
`;
export const SectionStates = styled.section`
  /* height: 60%; */
  /* background-image: linear-gradient( to bottom, var(--orangeMedium), var(--orangeWeak)); */
`;
export const FormWeather = styled.form``;

export const InputWeather = styled.input``;

export const ButtonSearch = styled.button`
  padding: 10px;
  background: #fff;
  border: none;
`;

export const SearchIcon = styled(BiSearch)`
  height: 24px;
  width: 24px;
`;
