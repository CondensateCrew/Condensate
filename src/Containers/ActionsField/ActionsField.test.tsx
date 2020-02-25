/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { IBrainstormForm } from '../../interfaces';
import ActionsField from './ActionsField';
import mockActions from '../../data/mockActions';

describe('ActionsField', () => {
  let wrapper;
  beforeEach(() => {
    interface Props {
      formState: IBrainstormForm,
      setAction: (formState: IBrainstormForm) => void
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

    let mockSetAction = jest.fn();

    wrapper = shallow(<ActionsField
      formState={mockFormState}
      setAction={mockSetAction}
    />);

    expect(wrapper).toMatchSnapshot();
  });
  // it('should call setAction when a change event occurs', () => {
  //   let mockFormState = {
  //     question: '',
  //     categories: [],
  //     action: 'create an app',
  //     reset: true
  //   };
  //
  //   let mockSetAction = jest.fn();
  //
  //   wrapper = mount(<ActionsField
  //     formState={mockFormState}
  //     setAction={mockSetAction}
  //   />);
  //
  //   let mockEvent = {target: {value: 'Write a Book'}};
  //
  //   const instance = wrapper.instance();
  //
  //   wrapper.find('select').simulate('change', mockEvent);
  //   expect(mockSetAction).toHaveBeenCalled();
  // });
  // it('should update the local state when change event occurs', () => {
  //   let mockFormState = {
  //     question: '',
  //     categories: [],
  //     action: 'create an app',
  //     reset: true
  //   };
  //
  //   let mockSetAction = jest.fn();
  //
  //   wrapper = mount(<ActionsField
  //     formState={mockFormState}
  //     setAction={mockSetAction}
  //   />);
  //
  //   let mockEvent = {target: {value: 'Write a Book'}};
  //
  //   expect(wrapper.find('select').getDOMNode().value).toEqual('Create an App');
  //   wrapper.find('select').simulate('change', mockEvent);
  //   expect(wrapper).toMatchSnapshot();
  // });
});
