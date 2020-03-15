import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

let mockUser: Object = {};
jest.mock('react-redux', () => ({
  useSelector: () => mockUser
}));

describe('App component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if there is user logged', () => {
    mockUser = {
      id: '12dqdw2',
      firstName: 'Ray',
      lastName: 'Z'
    };
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
