import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore, Action } from 'interfaces';
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
  const actionsCollection = useSelector((store:AppStore) => store.actions);

  const handleChange = (e:React.MouseEvent<HTMLElement>):void => {
    const currentTarget = e.target as HTMLElement;
    setSelectedAction(currentTarget.innerText);
    setIsClicked(false);
  }

  const toggleBlock = (): void => setIsClicked(!isClicked);

  const updateAction = () => {
    let newChosenAction = actionsCollection.filter((action:Action) => {
      if (action.action === selectedAction) {
        return action
      }
    })
    setAction({...formState, action: newChosenAction[0]})
  }

  useEffect(updateAction, [ selectedAction ]);

  const actions = actionsCollection.map((action:Action, index:number) => {//eslint-disable-line
    if (selectedAction.toLowerCase() !== action.action.toLowerCase()) {
      return <li key={action.id} onClick={handleChange}>{action.action}</li>
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
