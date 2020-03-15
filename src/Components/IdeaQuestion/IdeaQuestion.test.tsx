/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import { IBrainstormForm } from '../../interfaces';
import IdeaQuestion from './IdeaQuestion';

describe('IdeaQuestion Component', () => {
  let wrapper: any;

  let mockFormState: IBrainstormForm = {
    question: '',
    categories: [],
    action: {id: 1, action: 'create an app'},
    reset: false
  };
  let mockSetQuestion = jest.fn();

  beforeEach(() => {
    wrapper = mount(<IdeaQuestion
      formState={mockFormState}
      setQuestion={mockSetQuestion}/>);
  })

  afterEach(() => {
    jest.clearAllMocks();
  })
  it('should match the snapshot with all the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setQuestion after changes in input occur', () => {
    const mockEvent: Object = {target: {value: 'What is love?'}}
    wrapper.find('input').simulate('change', mockEvent);
    expect(mockSetQuestion).toHaveBeenCalled();
  });

  it('should update question when change events occur', () => {
    const mockEvent: Object = {target: {value: 'What is love?'}}
    wrapper.find('input').simulate('change', mockEvent);
    expect(wrapper.find('input').getDOMNode().value).toEqual('What is love?')
  });

  it('should reset its state when formState.reset is true', () => {
    let mockFormState: IBrainstormForm = {
      question: '',
      categories: [],
      action: {id: 1, action: 'create an app'},
      reset: true
    };
    wrapper = mount(<IdeaQuestion
      formState={mockFormState}
      setQuestion={mockSetQuestion}/>);


  const mockEvent: Object = {target: {value: 'What is love?'}}
  wrapper.find('input').simulate('change', mockEvent);
  expect(wrapper.find('input').getDOMNode().value).toEqual('')
  });
});
