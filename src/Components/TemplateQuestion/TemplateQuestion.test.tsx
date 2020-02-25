/**
 * @jest-environment jsdom
 */
import React from 'react';
import TemplateQuestion from './TemplateQuestion';
import { mount } from 'enzyme';

describe('TemplateQuestion Component', () => {
  it('should match the snapshot', () => {
    const wrapper = mount(<TemplateQuestion
      templateQuestion={'A neighbor sings at a most ungodly hour'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
