/**
 * @jest-environment jsdom
 */

import React from 'react';
import InputElement from './InputElement';
import { mount } from 'enzyme';

type checkedInputType = 'first-name' | 'last-name' | 'email' | 'password' | 'repeat-password';

describe('InputElement component', () => {
  let wrapper: any;

  const mockTypeInput: checkedInputType = 'first-name';
  const mockUser = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  const mockSetUser = jest.fn();
  const mockSetPassword = jest.fn();
  const mockSetError = jest.fn();

  const mockProps = {
    typeInput: mockTypeInput,
    user: mockUser,
    setPassword: mockSetPassword,
    setUser: mockSetUser,
    setError: mockSetError
  };

  beforeEach(() => {
    wrapper = mount(<InputElement {...mockProps}/>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should match the snapshot if type is first-name', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if type is last-name', () => {
    const wrapper = mount(
      <InputElement {...mockProps} typeInput="last-name"/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if type is email', () => {
    const wrapper = mount(
      <InputElement {...mockProps} typeInput="email"/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if type is password', () => {
    const wrapper = mount(
      <InputElement {...mockProps} typeInput="password"/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if type is repeat-password', () => {
    const wrapper = mount(
      <InputElement {...mockProps} typeInput="repeat-password"/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('Change Events', () => {
    const mockEvent = {target: {value: 'Goose'}};

    it('should update local state when a change event occurs', () => {
      expect(wrapper.find('input').getDOMNode().value).toEqual('');
      wrapper.find('input').simulate('change', mockEvent);
      expect(wrapper.find('input').getDOMNode().value).toEqual('Goose');
    });

    it('should call setUser when a change event occurs', () => {
      wrapper.find('input').simulate('change', mockEvent);
      expect(mockSetUser).toHaveBeenCalled();
    });

    it('should call setPassword when a change event occurs', () => {
      const wrapper = mount(
        <InputElement {...mockProps} typeInput="repeat-password"/>
      );
      wrapper.find('input').simulate('change', mockEvent);
      expect(mockSetPassword).toHaveBeenCalled();
    });
  });
});
