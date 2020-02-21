import React from 'react';
import { shallow, mount } from 'enzyme';
import BrainstormAction from './BrainstormAction';

describe('BrainstormAction', () => {
  let wrapper;
  beforeEach(() => {
    interface Props {
      action: string,
      key: number
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const mockAction = 'create an app';
    const mockKey = 4;

    wrapper = shallow(<BrainstormAction 
      action={mockAction}
      key={mockKey}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});