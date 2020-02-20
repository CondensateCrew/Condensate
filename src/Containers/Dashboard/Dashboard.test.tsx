import React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';

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
});
