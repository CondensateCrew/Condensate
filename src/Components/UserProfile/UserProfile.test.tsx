import React from 'react';
import { shallow, mount } from 'enzyme';
import UserProfile from './UserProfile';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ({
    firstName: 'Alan',
    lastName: 'Birds'
  }),
  useDispatch: () => mockDispatch
}));

describe('UserProfile', () => {
  let wrapper;
  beforeEach(() => {
    interface Props {
      firstName: string,
      lastName: string,
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const mockFirst = 'Alan';
    const mockLast = 'Bird';
    
    wrapper = shallow(<UserProfile 
      firstName={mockFirst}
      lastName={mockLast}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});

