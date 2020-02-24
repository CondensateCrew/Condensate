import React from 'react';
import GameBoard from './GameBoard';
import { shallow } from 'enzyme';
import { addChosenWord } from 'redux/actions';
const mockDispatch = jest.fn();

jest.mock('redux/actions');
let mockWords: string[];
jest.mock('react-redux', () => ({
  useSelector: () => mockWords,
  useDispatch: () => mockDispatch
}));

describe('GameBoard component', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    mockWords = ['Rest'];
    const wrapper = shallow(<GameBoard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if there is all 9 words', () => {
    mockWords = ['Rest', 'Toy', 'Snow', 'Owl', 'Oil', 'Grid', 'Math', 'Leg', 'Men'];
    const wrapper = shallow(<GameBoard />);
    expect(wrapper).toMatchSnapshot();
  });
});
