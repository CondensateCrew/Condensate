/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount } from 'enzyme';
import BrainstormCategory from './BrainstormCategory';

describe('BrainstormCategory', () => {
  let wrapper: any;

  const mockFormState = {
    question: '',
    categories: [],
    action: 'create an app',
    reset: true
  };

  const mockCategory = {
    id: 1,
    name: 'Technology'
  };

  const mockSetCategory = jest.fn();

  const mockProps = {
    category: mockCategory,
    formState: mockFormState,
    setCategory: mockSetCategory
  }

  beforeEach(() => {
    wrapper = mount(
      <BrainstormCategory {...mockProps}/>
    );
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a different snapshot after a click event', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addRemoveCategory when inactive button is clicked', () => {
    const mockArgument = {
      ...mockFormState,
      categories: [...mockFormState.categories, mockCategory]
    };
    wrapper.find('button').simulate('click');

    expect(mockSetCategory).toHaveBeenCalledWith(mockArgument);
  });

  it('should call addRemoveCategory when active button is clicked', () => {
    const mockArgument = {
      ...mockFormState,
      categories: []
    };

    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');

    expect(mockSetCategory).toHaveBeenCalledWith(mockArgument);
  });
});
