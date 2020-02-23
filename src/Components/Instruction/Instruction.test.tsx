import React from 'react';
import Instruction from './Instruction';
import { mount } from 'enzyme';

describe('Instruction Component', () => {
  it('should match the snapshot', () => {
    const wrapper = mount(<Instruction />)
    expect(wrapper).toMatchSnapshot();
  });
});