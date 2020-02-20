import './BrainstormCard.scss';
import React, { useState } from 'react';
import { Category } from 'interfaces';
import menu from 'assets/menu-dot.svg';
import MenuBlock from 'Containers/MenuBlock/MenuBlock';

interface Props {
  id: number,
  question: string,
  idea: string,
  action: string,
  isGenius: boolean,
  categories: Category[]
}

const BrainstormCard: React.FC<Props> = (props) => {
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const { id, question, idea, action, isGenius, categories } = props;
  const catgs = categories.map((ctg: Category) => (
    <p key={`ctg-${ctg.name.toLowerCase()}`}>{ctg.name}</p>
  ));

  const showMenu = (): void => setIsClicked(true);

  return (
    <div className='bs-card'>
      <header>
        <h4>{question}</h4>
        {
          !isClicked
            ? <img src={menu} alt="menu" onClick={showMenu}/>
            : <MenuBlock {...{setIsClicked, id}}/>
        }
      </header>
      <h5>{action}</h5>
      <p>{idea}</p>
      <footer>
        { isGenius && <p className="genius-label">Genius</p> }
        { catgs }
      </footer>
    </div>
  )
}

export default BrainstormCard;
