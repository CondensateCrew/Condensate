import React from 'react';
import MenuBlock from './MenuBlock';
import { shallow } from 'enzyme';
import { toggleBrainstorm, deleteBrainstorm} from 'redux/actions';

jest.mock('redux/actions')

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('MenuBlock component', () => {
  let wrapper: any;
  const setIsClicked = jest.fn();

  const mockProps = {
    id: 1,
    setIsClicked
  };

  beforeEach(() => {
    wrapper = shallow(<MenuBlock {...mockProps}/>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setIsClicked prop when close btn is clicked', () => {
    wrapper.find('img[alt="close"]').simulate('click');
    expect(setIsClicked).toHaveBeenCalledWith(false);
  });

  it('should call toggleBrainstorm prop when idea btn is clicked', () => {
    wrapper.find('img[alt="idea"]').simulate('click');
    expect(toggleBrainstorm).toHaveBeenCalledWith(1);
  });

  it('should call deleteBrainstorm prop when delete btn is clicked', () => {
    wrapper.find('img[alt="delete"]').simulate('click');
    expect(deleteBrainstorm).toHaveBeenCalledWith(1);
  });
});
