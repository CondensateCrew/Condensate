import React from 'react';
import DisplayInsights from './DisplayInsights';
import { shallow } from 'enzyme';

describe('DisplayInsights component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<DisplayInsights />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if block is opened', () => {
    const wrapper = shallow(<DisplayInsights />);
    wrapper.find('header>button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
