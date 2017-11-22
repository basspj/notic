/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { Platform, View, Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { moderateHorizontalScale } from '@mobile/themes';

import { EnvConfig } from './config';

interface IThemeProvider {
  theme?: ITheme;
}
interface ITheme {
  bg: string;
}

const theme: ITheme = {
  bg: '#795548',
};

const Container = styled(View)`
  background-color: ${(props: IThemeProvider) =>
    props.theme ? props.theme.bg : 'white'};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface IContainer {
  blue?: boolean;
}

const WelcomeText = styled(Text)`
  color: ${(props: IContainer) => (props.blue ? '#1976d2' : '#F5FCFF')};
  font-size: ${moderateHorizontalScale(20)};
  text-align: center;
  margin-horizontal: 10;
  margin-vertical: 10;
`;

const InstructionText = styled(Text)`
  text-align: center;
  color: #333;
  margin-bottom: 5;
`;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu',
});

export const App = () => (
  <ThemeProvider theme={theme}>
    <Container testID={EnvConfig.babel.E2E_TEST_IDS.ROOT}>
      <WelcomeText blue>Welcome to React Native!</WelcomeText>
      <InstructionText>To get started, edit App.js</InstructionText>
      <InstructionText>{instructions}</InstructionText>
    </Container>
  </ThemeProvider>
);

export default App;
