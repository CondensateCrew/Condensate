import React from 'react';
import { shallow } from 'enzyme';
import { IBrainstormForm, Category } from '../../interfaces';
import CategoriesField from './CategoriesField';

const mockCategory: Category[] = [
  {id: 1, name: 'Education'},
  {id: 2, name: 'Technology'},
  {id: 3, name: 'Environment'},
  {id: 4, name: 'Food'},
  {id: 5, name: 'Music'}
];

jest.mock('react-redux', () => ({
  useSelector: () => mockCategory
}));

describe('CategoriesField', () => {
  let wrapper: any;
  const mockFormState: IBrainstormForm = {
    question: '',
    categories: [],
    action: {
      id: 1,
      action: 'create an app'
    },
    reset: true
  };

  const mockSetCategory = jest.fn();
  const mockProps = {
    formState: mockFormState,
    setCategory: mockSetCategory
  };

  beforeEach(() => {
    wrapper = shallow(<CategoriesField {...mockProps} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
