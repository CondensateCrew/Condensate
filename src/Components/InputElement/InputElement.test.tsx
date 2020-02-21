import React from 'react';
import InputElement from './InputElement';
import { mount, shallow } from 'enzyme';
import { UserSignupPosting, } from '../../interfaces';

describe('LoginForm component', () => {
  let wrapper;
  beforeEach(() => {
    type checkedInputType = 'first-name' | 'last-name' | 'email' | 'password' | 'repeat-password';

    interface Props {
      typeInput: checkedInputType,
      user: UserSignupPosting,
      setPassword: (repeatPassword: string) => void
      setUser: (user: UserSignupPosting) => void
      setError: (error: string) => void
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should match the snapshot', () => {
    const mockTypeInput = 'first-name';
    const mockUser = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
    const mockSetUser = jest.fn();
    const mockSetPassword = jest.fn();
    const mockSetError = jest.fn();

    wrapper = shallow(<InputElement 
      typeInput={mockTypeInput}
      user={mockUser}
      setPassword={mockSetPassword}
      setUser={mockSetUser}
      setError={mockSetError}
    />);

    expect(wrapper).toMatchSnapshot();
  });
  describe('Change Events', () => {
    it('should update local state when a change event occurs', () => {
      const mockTypeInput = 'first-name';
      const mockUser = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      };
      const mockSetUser = jest.fn();
      const mockSetPassword = jest.fn();
      const mockSetError = jest.fn();

      wrapper = mount(<InputElement 
        typeInput={mockTypeInput}
        user={mockUser}
        setPassword={mockSetPassword}
        setUser={mockSetUser}
        setError={mockSetError}
      />);
      const mockEvent = {target: {value: 'Goose'}};
      
      expect(wrapper.find('input').getDOMNode().value).toEqual('');
      wrapper.find('input').simulate('change', mockEvent);
      expect(wrapper.find('input').getDOMNode().value).toEqual('Goose');
    });

    it('should call setUser when a change event occurs', () => {
      const mockTypeInput = 'first-name';
      const mockUser = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      };
      const mockSetUser = jest.fn();
      const mockSetPassword = jest.fn();
      const mockSetError = jest.fn();

      wrapper = mount(<InputElement 
        typeInput={mockTypeInput}
        user={mockUser}
        setPassword={mockSetPassword}
        setUser={mockSetUser}
        setError={mockSetError}
      />);
      const mockEvent = {target: {value: 'Goose'}};
      
      const instance = wrapper.instance();

      wrapper.find('input').simulate('change', mockEvent);
      expect(mockSetUser).toHaveBeenCalled();
    });
  });
});

