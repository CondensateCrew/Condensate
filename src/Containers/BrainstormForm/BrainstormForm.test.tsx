import React from 'react';
import { shallow, mount } from 'enzyme';
import BrainstormForm from './BrainstormForm';
import { useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
      useDispatch: () => mockDispatch
    }));

describe('BrainstormCategory', () => {
  let wrapper;
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));

    const mockBrainstormFormState = true;
    const mockCancel = jest.fn();

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
    const mockBrainstormFormState = true;
    const mockCancel = jest.fn();

    wrapper = mount(<MemoryRouter 
      initialEntries={[ { pathname: '/', key: 'testKey' } ]}><BrainstormForm 
      brainstormFormState={mockBrainstormFormState}
      cancel={mockCancel}/></MemoryRouter>)

    const instance = wrapper.instance();

    wrapper.find('.cancel-btn').simulate('click');
    expect(mockCancel).toHaveBeenCalled();
  });
});