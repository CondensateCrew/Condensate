import React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';

jest.mock('react-redux', () => ({
  useSelector: () => ['Tech']
}));

describe('Dashboard component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot when the new brainstorm button has been clicked', () => {
    wrapper = shallow(<Dashboard />);

    wrapper.find('.dashboard-brainstorm-form-div').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
