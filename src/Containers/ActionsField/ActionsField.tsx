import React, { useState, useEffect } from 'react';
import BrainstormAction from '../../Components/BrainstormAction/BrainstormAction';
import mockActions from '../../data/mockActions';
import './ActionsField.scss';
import down from 'assets/down.svg';

import { IBrainstormForm } from '../../interfaces';

interface Props {
  formState: IBrainstormForm
  setAction: (formState: IBrainstormForm) => void;
}

const ActionsField:React.FC<Props> = ({ formState, setAction }) => {
  const [ selectedAction, setSelectedAction ] = useState<string>('Create an app');
  const [ isClicked, setIsClicked ] = useState<boolean>(false);

  const handleChange = (e:React.MouseEvent<HTMLElement>):void => {
    const currentTarget = e.target as HTMLElement;
    setSelectedAction(currentTarget.innerText);
    setIsClicked(false);
  }

  const toggleBlock = (): void => setIsClicked(!isClicked);

  const updateAction = () => {
    setAction({...formState, action: selectedAction})
  }

  useEffect(updateAction, [ selectedAction ]);

  const actions = mockActions.map((action:string, index:number) => {
    if (selectedAction.toLowerCase() !== action.toLowerCase()) {
      return <li key={index} onClick={handleChange}>{action}</li>
    }
  });

  const headerState = (isClicked) ? 'clicked' : '';

  return (
    <div className="action-toggle">
      <header className={headerState} onClick={toggleBlock}>
        <p className="chosen">{selectedAction}</p>
        <img src={down} alt="down"/>
      </header>
      {isClicked &&
        <ul className={headerState}>
        { actions }
        </ul>
      }
    </div>
  )
}

export default ActionsField;
