import React from 'react';
import ExampleSentence from './ExampleSentence';
import { mount } from 'enzyme';

describe('ExampleSentence Component', () => {
  it('should match the snapshot', () => {
    const wrapper = mount(<ExampleSentence
      exampleSentence={'A neighbor sings at a most ungodly hour'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
