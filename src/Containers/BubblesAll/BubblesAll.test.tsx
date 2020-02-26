import React from 'react';
import BubblesAll from './BubblesAll';
import { shallow } from 'enzyme';
const mockDispatch = jest.fn();

let mockTime: boolean;

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({
    timeEnded: mockTime,
    randomWordCollections: [{
      word: 'Goose',
      sentence: 'Goose is walking'
    }]
  })
}));

describe('BubblesAll component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    mockTime = false;
    const wrapper = shallow(
      <BubblesAll />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if time is ended', () => {
    mockTime = true;
    const wrapper = shallow(
      <BubblesAll />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
