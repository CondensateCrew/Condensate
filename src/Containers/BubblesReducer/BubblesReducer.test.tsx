import React from 'react';
import BubblesReducer from './BubblesReducer';
import { mount } from 'enzyme';
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('BubblesReducer component', () => {
  const mockChosenWords = ['Rest', 'Toy', 'Snow', 'Owl', 'Oil', 'Grid', 'Math', 'Leg', 'Men'];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = mount(
      <BubblesReducer chosenWords={mockChosenWords} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
