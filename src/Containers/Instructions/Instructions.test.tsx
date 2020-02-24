import React from 'react';
import Instructions from './Instructions';
import { shallow } from 'enzyme';
import { endInstructions, reverseInstructions } from 'redux/actions';

const mockDispatch = jest.fn();
let mockValue: boolean;

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockValue
}));

jest.mock('redux/actions');

describe('Instructions component', () => {
  it('should match the snapshot', () => {
    mockValue = false;
    const wrapper = shallow(<Instructions />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot', () => {
    mockValue = true;
    const wrapper = shallow(<Instructions />);
    expect(wrapper).toMatchSnapshot();
  });
});
