import React from 'react';
import SecretSauce from './SecretSauce';
import { shallow } from 'enzyme';

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ['Goose']
}));

describe('SecretSauce component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<SecretSauce />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if block is opened', () => {
    const wrapper = shallow(<SecretSauce />);
    wrapper.find('header>button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
