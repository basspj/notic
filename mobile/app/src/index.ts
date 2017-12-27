import 'haul/hot/patch';
import { makeHot } from 'haul/hot';
import { AppRegistry } from 'react-native';

import App from './App';

const runApp = () => App;
AppRegistry.registerComponent('notic', __DEV__ ? makeHot(runApp) : runApp);
