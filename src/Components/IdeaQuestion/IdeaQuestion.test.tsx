import React from 'react';
import { shallow, mount } from 'enzyme';
import { IBrainstormForm } from '../../interfaces';
import IdeaQuestion from './IdeaQuestion';

describe('IdeaQuestion Component', () => {
  let wrapper;
  beforeEach(() => {
    interface Props {
      formState: IBrainstormForm,
      setQuestion: (formState: IBrainstormForm) => void
    }
  })

  afterEach(() => {
    jest.clearAllMocks();
  })
  it('should match the snapshot with all the data passed through', () => {
    let mockFormState = {
      question: '',
      categories: [],
      action: 'create an app',
      reset: true
    };
    let mockSetQuestion = jest.fn();
    
    wrapper = shallow(<IdeaQuestion 
      formState={mockFormState} 
      setQuestion={mockSetQuestion}/>);

    expect(wrapper).toMatchSnapshot();
  });
  describe('handleChange', () => {
    it('should update question when change events occur', () => {
      const mockEvent: Object = {target: {value: 'What is love?'}} 
      let mockFormState = {
        question: '',
        categories: [],
        action: 'create an app',
        reset: true
      };
      let mockSetQuestion = jest.fn();

      wrapper = mount(<IdeaQuestion 
        formState={mockFormState} 
        setQuestion={mockSetQuestion}/>);

      wrapper.find('input').simulate('change', mockEvent);
      expect(wrapper.find('input').getDOMNode().value).toEqual('What is love?')
    });
  });
});


