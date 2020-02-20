import React from 'react';
import BrainstormContainer from './BrainstormContainer';
import mockBrainstorms from './mockData'
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from "react-redux";

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ({
    allBrainstorms: mockBrainstorms,
    queryValue: '',
    filterValue: ''
  }),
  useDispatch: () => mockDispatch
}));

describe('BrainstormContainer component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<BrainstormContainer />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
