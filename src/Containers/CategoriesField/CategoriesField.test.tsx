import React from 'react';
import { shallow, mount } from 'enzyme';
import { IBrainstormForm } from '../../interfaces';
import CategoriesField from './CategoriesField';
import mockCategories from '../../data/mockCategories';

jest.mock('react-redux', () => ({
  useSelector: () => [
    {id: 1, name: 'Education'},
    {id: 2, name: 'Technology'},
    {id: 3, name: 'Environment'},
    {id: 4, name: 'Food'},
    {id: 5, name: 'Music'}
  ]
}));

describe('CategoriesField', () => {
  let wrapper;
  beforeEach(() => {
    interface Props {
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

    wrapper = shallow(<CategoriesField 
      formState={mockFormState}
      setCategory={mockSetCategory}
    />);
    
    expect(wrapper).toMatchSnapshot();
  });

});