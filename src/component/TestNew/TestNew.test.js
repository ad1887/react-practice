import React from 'react';
import { shallow } from 'enzyme';
import TestNew from './TestNew';

describe('<TestNew />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TestNew />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
