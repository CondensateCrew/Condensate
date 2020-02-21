import React from 'react';
import { shallow, mount } from 'enzyme';
import { IBrainstormForm } from '../../interfaces';
import BrainstormForm from './BrainstormForm';

describe('BrainstormCategory', () => {
  let wrapper;
  beforeEach(() => {
    interface Props {
      brainstormFormState: boolean,
      cancel: (brainstormFormState:boolean) => void;
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const mockBrainstormFormState = true;
    const mockCancel = jest.fn();

    wrapper = shallow(<BrainstormForm 
      brainstormFormState={mockBrainstormFormState}
      cancel={mockCancel}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call cancel when the button is clicked', () => {
    const mockBrainstormFormState = true;
    const mockCancel = jest.fn();

    wrapper = mount(<BrainstormForm 
      brainstormFormState={mockBrainstormFormState}
      cancel={mockCancel}
    />);
    
    const instance = wrapper.instance();

    wrapper.find('.cancel-btn').simulate('click');
    expect(mockCancel).toHaveBeenCalled();
  });
});