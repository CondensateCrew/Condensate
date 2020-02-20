import React from 'react';
import SearchBar from './SearchBar';
import { shallow } from 'enzyme';
import { addQuery, removeQuery } from 'redux/actions';

jest.mock('redux/actions')

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('SearchBar component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if btn is clicked', () => {
    wrapper.find('.short-search-btn').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if btn is clicked and query is submitted', () => {
    wrapper.find('.short-search-btn').simulate('click');
    wrapper.find('input').simulate('change', {target:{value: 'sth'}});
    wrapper.find('img[alt="search"]').simulate('click', {preventDefault: jest.fn()});
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addQuery prop when submit is clicked', () => {
    wrapper.find('.short-search-btn').simulate('click');
    wrapper.find('input').simulate('change', {target:{value: 'sth'}});
    wrapper.find('img[alt="search"]').simulate('click', {preventDefault: jest.fn()});
    expect(addQuery).toHaveBeenCalledWith('sth');
  });

  it('should call removeQuery prop when submit is clicked', () => {
    wrapper.find('.short-search-btn').simulate('click');
    wrapper.find('input').simulate('change', {target:{value: 'sth'}});
    wrapper.find('img[alt="search"]').simulate('click', {preventDefault: jest.fn()});
    wrapper.find('img[alt="close"]').simulate('click');
    expect(removeQuery).toHaveBeenCalled();
  });
});
