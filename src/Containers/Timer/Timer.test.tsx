import React from 'react';
import Timer from './Timer';
import { shallow } from 'enzyme';

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('Timer component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Timer time={90} />);
    expect(wrapper).toMatchSnapshot();
  });
});
