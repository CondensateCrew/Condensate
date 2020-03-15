/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import BrainstormForm from './BrainstormForm';
import { MemoryRouter } from 'react-router-dom';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => [{id: 1, action: 'Create an App'}]
}));

describe('BrainstormForm', () => {
  let wrapper: any;

  const mockBrainstormFormState = true;
  const mockCancel = jest.fn();

  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));

    wrapper = mount(<MemoryRouter
      initialEntries={[ { pathname: '/', key: 'testKey' } ]}><BrainstormForm
      brainstormFormState={mockBrainstormFormState}
      cancel={mockCancel}/></MemoryRouter>)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call cancel when the button is clicked', () => {
    wrapper.find('.cancel-btn').simulate('click');
    expect(mockCancel).toHaveBeenCalled();
  });

  it('should reset state when resetForm is called', () => {
    const mockEvent: Object = {target: {value: 'Who ate my cheeseburger?'}}
    wrapper.find('input').simulate('change', mockEvent);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('button').at(1).simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
