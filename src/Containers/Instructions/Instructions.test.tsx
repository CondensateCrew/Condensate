import React from 'react';
import Instructions from './Instructions';
import { mount } from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import { endInstructions, reverseInstructions, reverseTime } from 'redux/actions';
import { act } from '@testing-library/react';

const mockDispatch = jest.fn();
let mockValue: boolean;

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockValue
}));

jest.useFakeTimers();

jest.mock('redux/actions');

describe('Instructions component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should match the snapshot for type first-rd', () => {
    mockValue = false;
    const wrapper = mount(
      <Instructions type="first-rd" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if instructions ended for type first-rd', () => {
    mockValue = true;
    const wrapper = mount(
      <MemoryRouter keyLength={0} initialEntries={[{
        pathname: '/', key: 'testKey'
      }]}>
        <Instructions type="first-rd" />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot for type second-rd', () => {
    mockValue = false;
    const wrapper = mount(
      <Instructions type="second-rd" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if instructions ended for type second-rd', () => {
    mockValue = true;
    const wrapper = mount(
      <MemoryRouter keyLength={0} initialEntries={[{
        pathname: '/', key: 'testKey'
      }]} >
        <Instructions type="second-rd" />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe("function calls", () => {
    let wrapper: any;

    beforeEach(() => {
      mockValue = false;
      wrapper = mount(
        <Instructions type="second-rd" />
      );
    });

    it('should call reverseInstructions after rendering', () => {
      expect(reverseInstructions).toHaveBeenCalled();
    });

    it('should call reverseTime after rendering', () => {
      expect(reverseTime).toHaveBeenCalled();
    });

    it('should call endInstructions after rendering', () => {
      act(() => {
        jest.advanceTimersByTime(30000);
      });

      expect(endInstructions).toHaveBeenCalled();
    });
  });
});
