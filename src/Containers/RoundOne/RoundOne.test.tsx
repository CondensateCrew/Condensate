import React from 'react';
import RoundOne from './RoundOne';
import { shallow } from 'enzyme';
import { useSelector } from 'react-redux';
jest.mock('react-redux');

describe('RoundOne component', () => {
  it('should match the snapshot', () => {
    useSelector.mockImplementation(() => false);
    const wrapper = shallow(<RoundOne />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if time is ended', () => {
    useSelector.mockImplementation(() => true);
    const wrapper = shallow(<RoundOne />);
    expect(wrapper).toMatchSnapshot();
  });
});
