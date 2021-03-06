import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('Header time component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot after button is clicked', () => {
    const wrapper = shallow(<Header />);

    wrapper.find('button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
