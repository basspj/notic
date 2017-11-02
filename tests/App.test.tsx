import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import { App } from '~/App';

describe('ValidationComponent', () => {
  const wrapper = shallow(<App />);

  test('component exists', () => {
    expect(wrapper.length).toBe(1); // exists
  });

  test('component structure', () => {
    expect(wrapper.length).toBe(1); // exists
    expect(wrapper.name()).toBe('View'); // the right root component
    expect(wrapper.children().length).toBe(3); // the right root component
  });
});
