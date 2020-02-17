import React from 'react';
import LoginForm from './LoginForm';
import { shallow, mount } from 'enzyme';

describe('LoginForm component', () => {
  let wrapper: Object;
  beforeEach(() => {
    wrapper = shallow(<LoginForm />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('Change Events', () => {

  it('handleEmailChange: should update email state when change events occur', () => {
      const mockEvent: Object = { target: { value: 'example@email.com' } }
      const wrapper = mount(<LoginForm />);
      expect(wrapper.find('input').first().getDOMNode().value).toEqual('');
      wrapper.find('input').first().simulate('change', mockEvent);
      expect(wrapper.find('input').first().getDOMNode().value).toEqual('example@email.com');
    });

    it('handlePasswordChange: should update password state when change events occur', () => {
      const mockEvent: Object = { target: { value: 'password123' } }
      const wrapper = mount(<LoginForm />);
      expect(wrapper.find('input').last().getDOMNode().value).toEqual('');
      wrapper.find('input').last().simulate('change', mockEvent);
      expect(wrapper.find('input').last().getDOMNode().value).toEqual('password123');
    });
  });
});
