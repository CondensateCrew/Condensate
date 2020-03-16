/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './SignUpForm';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('SignUpForm component', () => {
  const mockToggle = jest.fn();
  const mockSetIsLoading = jest.fn();
  const mockSetCookie = jest.fn();

  const mockProps = {
    isLoading: false,
    isLogin: false,
    toggleTab: mockToggle,
    setIsLoading: mockSetIsLoading,
    setCookie: mockSetCookie
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper: any = shallow(<SignUpForm {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  // describe('Change Events', () => {
  //   it('should render a disabled button if not all form fields are filled', () => {
  //     const mockEvent: Object = { target: { value: 'Goose' } }
  //     const wrapper: any = shallow(<SignUpForm {...mockProps} />);
  //
  //     wrapper.find('input').first().simulate('change', mockEvent);
  //     expect(wrapper.find('button').getDOMNode().disabled).toEqual(true);
  //   });
  //
  //   it('should render an enabled button if all form fields are filled', () => {
  //       const mockEvent: Object = { target: { value: 'Goose' } };
  //       const mockEvent2: Object = { target: { value: 'Red' } };
  //       const mockEvent3: Object = { target: { value: 'loosegoose@email.com' } };
  //       const mockEvent4: Object = { target: { value: 'password123' } };
  //       const mockEvent5: Object = { target: { value: 'password123' } };
  //
  //       const wrapper: any = shallow(<SignUpForm {...mockProps} />);
  //
  //       wrapper.find('input').first().simulate('change', mockEvent);
  //       wrapper.find('#last-name').first().simulate('change', mockEvent2);
  //       wrapper.find('#email').first().simulate('change', mockEvent3);
  //       wrapper.find('#password').first().simulate('change', mockEvent4);
  //       wrapper.find('input').last().simulate('change', mockEvent5);
  //
  //       expect(wrapper.find('button').getDOMNode().disabled).toEqual(false);
  //   });
  // });
});
