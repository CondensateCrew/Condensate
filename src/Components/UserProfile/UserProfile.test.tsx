import React from 'react';
import { shallow, mount } from 'enzyme';
import UserProfile from './UserProfile';


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

