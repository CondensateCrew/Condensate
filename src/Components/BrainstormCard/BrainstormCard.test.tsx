import React from 'react';
import BrainstormCard from './BrainstormCard';
import { shallow } from 'enzyme';

describe('BrainstormCard component', () => {
  let wrapper: any;

  const mockProps = {
    id: 1,
    question: 'What?',
    response: 'Idea',
    action: {
      id: 1,
      action: 'Build an app'
    },
    isGenius: true,
    categories: [{
      id: 1,
      name: 'Tech'
    }]
  };

  beforeEach(() => {
    wrapper = shallow(<BrainstormCard {...mockProps}/>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if menu is clicked', () => {
    wrapper.find('img[alt="menu"]').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if brainstorm is not genius', () => {
    const wrapper = shallow(
      <BrainstormCard {...mockProps} isGenius={false}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if brainstorm is not genius and menu is clicked', () => {
    const wrapper = shallow(
      <BrainstormCard {...mockProps} isGenius={false}/>
    );
    wrapper.find('img[alt="menu"]').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
