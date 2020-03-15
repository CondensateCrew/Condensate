import React from 'react';
import DisplayInsights from './DisplayInsights';
import { shallow } from 'enzyme';

jest.mock('react-redux', () => ({
  useSelector: () => [{
    question: {
      word: 'Toy',
      sentence: 'Play with a toy'
    },
    answers: ['Do I?']
  }]
}));

describe('DisplayInsights component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<DisplayInsights />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if block is opened', () => {
    const wrapper = shallow(<DisplayInsights />);
    wrapper.find('header>button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
