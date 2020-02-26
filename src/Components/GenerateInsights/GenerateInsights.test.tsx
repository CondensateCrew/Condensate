/**
 * @jest-environment jsdom
 */

import React from 'react';
import GenerateInsights from './GenerateInsights';
import { shallow } from 'enzyme';

describe('GenerateInsights component', () => {
  let wrapper: any;

  const mockSetResponses = jest.fn();
  const mockProps = {
    text: 'Other',
    responses: ['Response', 'Other'],
    setResponses: mockSetResponses,
    id: 1
  }

  beforeEach(() => {
    wrapper = shallow(<GenerateInsights {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setResponses after remove button was clicked', () => {
    wrapper.find('img').simulate('click');
    expect(mockSetResponses).toHaveBeenCalledWith(['Response']);
  });
});
