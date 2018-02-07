import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import Home from '~/src/Home';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  test('component exists', () => {
    expect(wrapper.length).toBe(1); // exists
  });

  test('component structure', () => {
    expect(wrapper.length).toBe(1); // exists
    expect(wrapper.name()).toBe('Styled(View)'); // the right root component
    expect(wrapper.children().length).toBe(3); // the right root component
  });
});
