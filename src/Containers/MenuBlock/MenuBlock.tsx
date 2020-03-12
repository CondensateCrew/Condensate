import './MenuBlock.scss';
import React from 'react';
import { useDispatch } from "react-redux";
import { toggleBrainstorm, deleteBrainstorm} from 'redux/actions'
import ideaIcon from 'assets/idea.svg';
import closeIcon from 'assets/close.svg';
import deleteIcon from 'assets/delete.svg';

interface Props {
  id: number,
  setIsClicked: (isClicked: boolean) => void;
};

const MenuBlock: React.FC<Props> = ({setIsClicked, id}) => {
  const closeMenu = (): void => setIsClicked(false);
  const dispatch = useDispatch();
  const toggleCard = () => dispatch(toggleBrainstorm(id));
  const deleteCard = () => dispatch(deleteBrainstorm(id));
  return (
    <div className="menu-block">
      <img src={ideaIcon} alt="idea" onClick={toggleCard}/>
      <img src={deleteIcon} alt="delete" onClick={deleteCard}/>
      <img src={closeIcon} alt="close" onClick={closeMenu}/>
    </div>
  )
}

export default MenuBlock;
