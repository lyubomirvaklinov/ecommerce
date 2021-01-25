import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  },
  body: {
    width: 100%;
    height: 100%;
  }
`;

export const Main = styled.div`
  margin: auto;
`;
