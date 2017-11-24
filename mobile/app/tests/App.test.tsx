import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import App from '~/src/App';

describe('App', () => {
  const wrapper = shallow(<App />);

  test('component exists', () => {
    expect(wrapper.length).toBe(1); // exists
  });

  test('component structure', () => {
    expect(wrapper.length).toBe(1); // exists
    expect(wrapper.name()).toBe('ThemeProvider'); // the right root component
    expect(wrapper.children().length).toBe(1); // the right root component
  });
});
