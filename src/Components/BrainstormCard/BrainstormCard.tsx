import './BrainstormCard.scss';
import React, { useState } from 'react';
import { Category, Action } from 'interfaces';
import menu from 'assets/menu-dot.svg';
import MenuBlock from 'Containers/MenuBlock/MenuBlock';

interface Props {
  id: number,
  question: string,
  response: string,
  action: Action,
  isGenius: boolean,
  categories: Category[]
}

const BrainstormCard: React.FC<Props> = (props) => {
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const { id, question, response, action, isGenius, categories } = props;
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
      <h5>{action.action}</h5>
      <p>{response}</p>
      <footer>
        { isGenius && <p className="genius-label">Genius</p> }
        { catgs }
      </footer>
    </div>
  )
}

export default BrainstormCard;
