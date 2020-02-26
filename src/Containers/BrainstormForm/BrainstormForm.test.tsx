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
  useSelector: () => [{id: 1, action: 'Build'}]
}));

describe('BrainstormForm', () => {
  let wrapper: any;

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
