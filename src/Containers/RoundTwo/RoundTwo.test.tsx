/**
 * @jest-environment jsdom
 */

import React from 'react';
import RoundTwo from './RoundTwo';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';


const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ({
    timeEnded: false,
    exampleSentences: [{
      word: 'toy',
      sentence: 'Play with a toy'
    }],
    chosenWords: ['toy']
  }),
  useDispatch: () => mockDispatch
}));

describe('RoundTwo Component', () => {
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot when rendering for the first time', () => {
    const wrapper = mount(<MemoryRouter
      initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
        <RoundTwo /></MemoryRouter>)

    expect(wrapper).toMatchSnapshot();
  });
  describe('Change Events', () => {
    it('should update state when change event occurs', () => {
      const mockEvent = {target: {value: 'What does the fox say?'}};
      const wrapper = mount(<MemoryRouter
        initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
          <RoundTwo /></MemoryRouter>);

      const instance = wrapper.instance();
      wrapper.find('input').simulate('change', mockEvent);
      expect(wrapper.find('input').getDOMNode().value).toEqual('What does the fox say?')
    });
  });
});
