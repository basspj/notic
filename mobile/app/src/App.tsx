/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Colors, ITheme } from '@mobile/themes';
import { Home } from '@mobile/home';

const theme: ITheme = {
  bg: Colors.light.bg,
};

export const App: React.SFC<{}> = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
