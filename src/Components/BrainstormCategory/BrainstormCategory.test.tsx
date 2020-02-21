import React from 'react';
import { shallow, mount } from 'enzyme';
import { IBrainstormForm } from '../../interfaces';
import BrainstormCategory from './BrainstormCategory';

describe('BrainstormCategory', () => {
  let wrapper;
  beforeEach(() => {
    interface Props {
      category: string,
      formState: IBrainstormForm,
      setCategory: (formState: IBrainstormForm) => void
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
      let mockFormState = {
        question: '',
        categories: [],
        action: 'create an app',
        reset: true
      };

      let mockSetCategory = jest.fn();

      wrapper = shallow(<BrainstormCategory
        category={'Technology'}
        formState={mockFormState}
        setCategory={mockSetCategory}
      />);

      expect(wrapper).toMatchSnapshot();
  });
  it('should render a different snapshot after a click event', () => {
    let mockFormState = {
      question: '',
      categories: [],
      action: 'create an app',
      reset: true
    };

    let mockSetCategory = jest.fn();

    wrapper = mount(<BrainstormCategory
      category={'Technology'}
      formState={mockFormState}
      setCategory={mockSetCategory}
    />);

    wrapper.find('button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
  it('should call addRemoveCategory when button is clicked', () => {
    let mockFormState = {
      question: '',
      categories: [],
      action: 'create an app',
      reset: true
    };

    let mockSetCategory = jest.fn();

    wrapper = mount(<BrainstormCategory
      category={'Technology'}
      formState={mockFormState}
      setCategory={mockSetCategory}
    />);
    const instance = wrapper.instance();
    wrapper.find('button').simulate('click');
    
    expect(mockSetCategory).toHaveBeenCalled();
  });
});
