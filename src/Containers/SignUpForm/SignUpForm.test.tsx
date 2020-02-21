import React from 'react';
import { shallow, mount } from 'enzyme';
import { UserSignupPosting } from '../../interfaces';
import SignUpForm from './SignUpForm';
import { MemoryRouter } from 'react-router-dom';

describe('SignUpForm component', () => {
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
      wrapper = shallow(<MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}><SignUpForm 
        isLogin={false} 
        toggleTab={mockToggle}
        /></MemoryRouter>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Change Events', () => {
    it('should render a disabled button if not all form fields are filled', () => {
        const mockEvent: Object = { target: { value: 'Goose' } }
        const mockToggle = jest.fn();
        wrapper = mount(<MemoryRouter><SignUpForm 
          isLogin={true} 
          toggleTab={mockToggle}
          /></MemoryRouter>);
        
        wrapper.find('input').first().simulate('change', mockEvent);
        expect(wrapper.find('button').getDOMNode().disabled).toEqual(true);
    });
    it('should render an enabled button if all form fields are filled', () => {
        const mockEvent: Object = { target: { value: 'Goose' } };
        const mockEvent2: Object = { target: { value: 'Red' } };
        const mockEvent3: Object = { target: { value: 'loosegoose@email.com' } };
        const mockEvent4: Object = { target: { value: 'password123' } };
        const mockEvent5: Object = { target: { value: 'password123' } };

        const mockToggle = jest.fn();
        wrapper = mount(<MemoryRouter><SignUpForm 
          isLogin={true} 
          toggleTab={mockToggle}
          /></MemoryRouter>);
        
        wrapper.find('input').first().simulate('change', mockEvent);
        wrapper.find('#last-name').first().simulate('change', mockEvent2);
        wrapper.find('#email').first().simulate('change', mockEvent3);
        wrapper.find('#password').first().simulate('change', mockEvent4);
        wrapper.find('input').last().simulate('change', mockEvent5);

        expect(wrapper.find('button').getDOMNode().disabled).toEqual(false);
    });

    it('should render an error message if an invalid email is entered', () => {
      // BUG WITH RENDERING THE ERROR MESSAGE OF THE SIGNUP FORM 
      // DUE TO ASYNC OF SETSTATE THE FORM PROCEEDS TO DASHBOARD BEFORE
      // UPDATING THE ERROR PORTION OF STATE
    });
  });
});