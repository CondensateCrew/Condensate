import React from 'react';
import ChosenWordTrain from './ChosenWordTrain';
import { shallow } from 'enzyme';

jest.mock('react-redux', () => ({
  useSelector: () => ['Temp']
}));

describe('ChosenWordTrain component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<ChosenWordTrain />);
    expect(wrapper).toMatchSnapshot();
  });
});
