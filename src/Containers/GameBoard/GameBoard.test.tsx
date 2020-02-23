import React from 'react';
import GameBoard from './GameBoard';
import { shallow } from 'enzyme';
import { addChosenWord } from 'redux/actions';
const mockDispatch = jest.fn();

jest.mock('redux/actions');
jest.mock('react-redux', () => ({
  useSelector: () => ({
    chosenWords: ['Rest'],
    timeEnded: false,
  }),
  useDispatch: () => mockDispatch
}));

describe('GameBoard component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<GameBoard />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addChosenWord when bubble is clicked', () => {
    wrapper.find('#water').simulate('click', {
      target: {
        parentNode: {
          classList: { add: jest.fn() }
        },
        previousSibling: {
          classList: { add: jest.fn() }
        },
        style: {
          animation: ''
        },
        id: 'water'
      }
    });

    expect(addChosenWord).toHaveBeenCalledWith('water');
  });
});
