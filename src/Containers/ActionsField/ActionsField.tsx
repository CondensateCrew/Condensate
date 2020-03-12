import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore, Action } from 'interfaces';
import './ActionsField.scss';
import down from 'assets/down.svg';
import { IBrainstormForm } from '../../interfaces';
interface Props {
  formState: IBrainstormForm,
  setAction: (formState: IBrainstormForm) => void;
};

const ActionsField:React.FC<Props> = ({ formState, setAction }) => {
  const [ selectedAction, setSelectedAction ] = useState<Action>({id: 1, action: 'Create an app'});
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const actionsCollection = useSelector((store:AppStore) => store.actions);

  const handleChange = (e:React.MouseEvent<HTMLElement>):void => {
    const currentTarget = e.target as HTMLElement;

    let newAction:(Action | undefined) = actionsCollection.find((action:Action) => {
      if (action.action === currentTarget.innerText) {
        return action;
      }
      return undefined;
    });

    if (!newAction) {
      newAction = {id: 1, action: 'Create an app'};
    };

    setSelectedAction(newAction);
    setIsClicked(false);
  }

  const toggleBlock = (): void => setIsClicked(!isClicked);

  const updateAction = () => {
    let newChosenAction: (Action | undefined) = actionsCollection
    .find((action:Action) => action.action === selectedAction.action) 

    if (!newChosenAction) {
      newChosenAction = {id: 1, action: 'Create an app'};
    };

    setAction({...formState, action: newChosenAction});
  }

  useEffect(updateAction, [ selectedAction ]);

  const actions:(JSX.Element | undefined)[] = actionsCollection.map((action:Action) => {
    if (selectedAction.action.toLowerCase() !== action.action.toLowerCase()) {
      return <li key={action.id} onClick={handleChange}>{action.action}</li>
    };
      return undefined;
  });

  const headerState = (isClicked) ? 'clicked' : '';

  return (
    <div className="action-toggle">
      <header className={headerState} onClick={toggleBlock}>
        <p className="chosen">{selectedAction.action}</p>
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
