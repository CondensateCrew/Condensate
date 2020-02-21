import React from 'react';
import LoginForm from './LoginForm';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('LoginForm component', () => {
  let wrapper;
  beforeEach(() => {
    interface Props {
      isLogin: boolean,
      toggleTab: (login: boolean) => void
    }

    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should match the snapshot', () => {
      const mockToggle = jest.fn();
      wrapper = shallow(<MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}><LoginForm 
        isLogin={true} 
        toggleTab={mockToggle}
        /></MemoryRouter>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Change Events', () => {
    it('should render a disabled button if not all form fields are filled', () => {
        const mockEvent: Object = { target: { value: 'example@email.com' } }
        const mockToggle = jest.fn();
        wrapper = mount(<MemoryRouter><LoginForm 
          isLogin={true} 
          toggleTab={mockToggle}
          /></MemoryRouter>);
        
        wrapper.find('input').first().simulate('change', mockEvent);
        expect(wrapper.find('button').getDOMNode().disabled).toEqual(true);
    });
    it('should render an enabled button if all form fields are filled', () => {
        const mockEvent: Object = { target: { value: 'example@email.com' } };
        const mockEvent2: Object = { target: { value: 'password123' } };
        const mockToggle = jest.fn();
        wrapper = mount(<MemoryRouter><LoginForm 
          isLogin={true} 
          toggleTab={mockToggle}
          /></MemoryRouter>);
        
        wrapper.find('input').first().simulate('change', mockEvent);
        wrapper.find('input').last().simulate('change', mockEvent2);
        expect(wrapper.find('button').getDOMNode().disabled).toEqual(false);
    });
    it('handleEmailChange: should update email state when change events occur', () => {
        const mockEvent: Object = { target: { value: 'example@email.com' } };
        const mockToggle = jest.fn();
        const wrapper = mount(<MemoryRouter><LoginForm 
          isLogin={true}
          toggleTab={mockToggle}
        /></MemoryRouter>);
        expect(wrapper.find('input').first().getDOMNode().value).toEqual('');
        wrapper.find('input').first().simulate('change', mockEvent);
        expect(wrapper.find('input').first().getDOMNode().value).toEqual('example@email.com');
    });

    it('handlePasswordChange: should update password state when change events occur', () => {
        const mockEvent: Object = { target: { value: 'password123' } };
        const mockToggle = jest.fn();
        const wrapper = mount(<MemoryRouter><LoginForm 
          isLogin={true}
          toggleTab={mockToggle}
        /></MemoryRouter>);
        expect(wrapper.find('input').last().getDOMNode().value).toEqual('');
        wrapper.find('input').last().simulate('change', mockEvent);
        expect(wrapper.find('input').last().getDOMNode().value).toEqual('password123');
    });
  });
});
