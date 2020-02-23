import React from 'react';
import RoundOne from './RoundOne';
import { shallow } from 'enzyme';

describe('RoundOne component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<RoundOne />);
    expect(wrapper).toMatchSnapshot();
  });
});
