/**
 * @jest-environment jsdom
 */

import React from 'react';
import LoginForm from './LoginForm';
import { mount } from 'enzyme';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('LoginForm component', () => {
  const mockToggle = jest.fn();
  const mockSetIsLoading = jest.fn();
  const mockSetCookie = jest.fn();

  const mockProps = {
    isLoading: true,
    isLogin: true,
    toggleTab: mockToggle,
    setIsLoading: mockSetIsLoading,
    setCookie: mockSetCookie
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper: any = mount(<LoginForm {...mockProps}/>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Change Events', () => {
    it('should render a disabled button if not all form fields are filled', () => {
        const mockEvent: Object = {target: {value: 'example@email.com'}};
        const wrapper: any = mount(<LoginForm {...mockProps}/>);
        wrapper.find('input').first().simulate('change', mockEvent);
        expect(wrapper.find('button').getDOMNode().disabled).toEqual(true);
    });
    it('should render an enabled button if all form fields are filled', () => {
        const mockEvent: Object = { target: {value: 'example@email.com'}};
        const mockEvent2: Object = { target: {value: 'password123'}};
        const wrapper: any = mount(<LoginForm {...mockProps}/>);
        wrapper.find('input').first().simulate('change', mockEvent);
        wrapper.find('input').last().simulate('change', mockEvent2);
        expect(wrapper.find('button').getDOMNode().disabled).toEqual(false);
    });

    it('handleEmailChange: should update email state when change events occur', () => {
        const mockEvent: Object = { target: { value: 'example@email.com' } };
        const wrapper: any = mount(<LoginForm {...mockProps}/>);
        expect(wrapper.find('input').first().getDOMNode().value).toEqual('');
        wrapper.find('input').first().simulate('change', mockEvent);
        expect(wrapper.find('input').first().getDOMNode().value).toEqual('example@email.com');
    });

    it('handlePasswordChange: should update password state when change events occur', () => {
        const mockEvent: Object = { target: { value: 'password123' } };
        const wrapper: any = mount(<LoginForm {...mockProps}/>);
        expect(wrapper.find('input').last().getDOMNode().value).toEqual('');
        wrapper.find('input').last().simulate('change', mockEvent);
        expect(wrapper.find('input').last().getDOMNode().value).toEqual('password123');
    });
  });
});
