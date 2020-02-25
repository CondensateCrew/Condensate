/**
 * @jest-environment jsdom
 */
import React from 'react';
import WelcomePage from './WelcomePage';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('WelcomePage Component', () => {
  let wrapper;

  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot with isLogin set to true and display LoginForm', () => {
    wrapper = shallow(<WelcomePage />)

    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot with isLogin set to false and display SignUpForm', () => {
    wrapper = mount(<MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}><WelcomePage /></MemoryRouter>)

    wrapper.find('.hidden').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
