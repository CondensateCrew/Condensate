/**
 * @jest-environment jsdom
 */

import React from 'react';
import FinalIdeaField from './FinalIdeaField';
import { mount } from 'enzyme';
import { addCurrentBrainstorm } from 'redux/actions';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => 'question?'
}));
jest.mock('redux/actions');

describe('FinalIdeaField component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<FinalIdeaField />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addCurrentBrainstorm after rendering', () => {
    expect(addCurrentBrainstorm).toHaveBeenCalled();
  });
});
