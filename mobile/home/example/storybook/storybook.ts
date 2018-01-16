/* eslint-disable global-require */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

const stories = () => {
  require('./stories');
};

// import stories
configure(stories, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });
AppRegistry.registerComponent('example', () => StorybookUI);
export default StorybookUI;
