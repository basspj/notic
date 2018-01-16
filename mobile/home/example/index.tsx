import React from 'react';
import { AppRegistry } from 'react-native';

import { Home } from '@mobile/home';

const App: React.SFC<{}> = () => <Home />;

AppRegistry.registerComponent('example', () => App);
