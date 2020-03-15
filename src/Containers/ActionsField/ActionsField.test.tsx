/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount } from 'enzyme';
import { IBrainstormForm } from '../../interfaces';
import ActionsField from './ActionsField';

jest.mock('react-redux', () => ({
  useSelector: () => [
    {id: 1, action: 'Create an App'},
    {id: 2, action: 'Write a Story'},
    {id: 3, action: 'Plan a Lesson'},
    {id: 4, action: 'Make a Recipe'},
    {id: 5, action: 'Write a Song'}
  ]
}));

describe('ActionsField', () => {
  let wrapper: any;

  let mockFormState: IBrainstormForm = {
    question: '',
    categories: [],
    action: {id: 1, action: 'create an app'},
    reset: false
  };

  let mockSetAction = jest.fn();

  beforeEach(() => {
    interface Props {
      formState: IBrainstormForm,
      setAction: (formState: IBrainstormForm) => void
    }

    wrapper = mount(<ActionsField
      formState={mockFormState}
      setAction={mockSetAction}
    />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display more actions when down arrow is clicked', () => {
    wrapper.find('img').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setAction/handleChange when a new li is clicked', () => {
    const mockEvent: Object = {target: {innerText: 'Write a Song'}}
    const instance = wrapper.instance();
    wrapper.find('img').simulate('click');
    wrapper.find('li').last().simulate('click', mockEvent);
    expect(wrapper).toMatchSnapshot();
  });

  it('should reset the local state when formState.reset is true', () => {
    const mockEvent: Object = {target: {innerText: 'Write a Story'}};

    wrapper.find('img').simulate('click');
    wrapper.find('li').at(2).simulate('click', mockEvent);
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({formState: {...mockFormState, reset: true}, setAction: jest.fn()});
    wrapper.update();

    expect(wrapper).toMatchSnapshot();

  });
});
