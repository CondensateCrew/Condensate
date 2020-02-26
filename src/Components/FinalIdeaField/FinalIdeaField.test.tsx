/**
 * @jest-environment jsdom
 */

import React from 'react';
import FinalIdeaField from './FinalIdeaField';
import { mount } from 'enzyme';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => 'question?'
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

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
});
