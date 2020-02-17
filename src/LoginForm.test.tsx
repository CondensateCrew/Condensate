import React from 'react';
import LoginForm from './LoginForm.tsx';
import { shallow } from 'enzyme';

describe('LoginForm component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LoginForm />)
    expect(wrapper).toMatchSnapshot();
  })
});