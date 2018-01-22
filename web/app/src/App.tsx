import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';

import logo from '~/public/logo.svg';

interface IThemeProvider {
  theme?: ITheme;
}
interface ITheme {
  bg: string;
}

const theme: ITheme = {
  bg: '#795548',
};

const Container = styled.div`
  background-color: ${(props: IThemeProvider) => (props.theme ? props.theme.bg : 'white')};
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const AppHeader = styled.div`
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const App: React.SFC = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <AppHeader>
        <AppLogo src={logo} alt='logo' />
        <h2>Welcome to React</h2>
      </AppHeader>
      <AppIntro>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </AppIntro>
    </Container>
  </ThemeProvider>
);

export default App;
