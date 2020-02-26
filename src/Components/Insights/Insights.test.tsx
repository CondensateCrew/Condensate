/**
 * @jest-environment jsdom
 */

import React from 'react';
import Insights from './Insights';
import { mount } from 'enzyme';

describe('Insights component', () => {
  let wrapper: any;

  const mockSetResponses = jest.fn();

  const mockProps = {
    text: 'Response',
    responses: ['Response'],
    setResponses: mockSetResponses
  };

  beforeEach(() => {
    wrapper = mount(<Insights {...mockProps}/>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setResponses after remove button is clicked', () => {
    wrapper.find('img').simulate('click');
    expect(mockSetResponses).toHaveBeenCalled();
  });
});
