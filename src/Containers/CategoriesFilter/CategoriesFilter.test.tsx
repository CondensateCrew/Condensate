import React from 'react';
import CategoriesFilter from './CategoriesFilter';
import { shallow } from 'enzyme';
import { addFilter } from 'redux/actions';

jest.mock('redux/actions')

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => '',
  useDispatch: () => mockDispatch
}));

describe('CategoriesFilter component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<CategoriesFilter categories={[{id: 1, name: 'Tech'}]} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if btn is clicked', () => {
    wrapper.find('.openning-btn').simulate('click', {preventDefault: jest.fn()});
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addFilter prop when button is clicked', () => {
    wrapper.find('#Tech').simulate('click', {preventDefault: jest.fn(), target: {id: 'Tech'}});
    expect(addFilter).toHaveBeenCalledWith('Tech');
  });
});
