import React from 'react';
import RoundOne from './RoundOne';
import { shallow } from 'enzyme';

let mockValue: boolean;
jest.mock('react-redux', () => ({
  useSelector: () => mockValue
}));

describe('RoundOne component', () => {
  it('should match the snapshot', () => {
    mockValue = false;
    const wrapper = shallow(<RoundOne />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if time is ended', () => {
    mockValue = true;
    const wrapper = shallow(<RoundOne />);
    expect(wrapper).toMatchSnapshot();
  });
});
