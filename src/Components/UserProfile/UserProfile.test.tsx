import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';
import { logOutUser } from 'redux/actions';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ({
    firstName: 'Alan',
    lastName: 'Birds'
  }),
  useDispatch: () => mockDispatch
}));

jest.mock('redux/actions');

describe('UserProfile', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<UserProfile />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if menu is clicked', () => {
    wrapper.find('.menu-svg').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should call logOutUser when logout button is clicked', () => {
    wrapper.find('.menu-svg').simulate('click');
    wrapper.find('.logout').simulate('click');
    expect(logOutUser).toHaveBeenCalled();
  });
});
