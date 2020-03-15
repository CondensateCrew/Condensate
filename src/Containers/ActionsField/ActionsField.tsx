import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore, Action } from 'interfaces';
import './ActionsField.scss';
import down from 'assets/down.svg';
import { IBrainstormForm } from '../../interfaces';

interface Props {
  formState: IBrainstormForm,
  setAction: (formState: IBrainstormForm) => void
};

const ActionsField:React.FC<Props> = ({ formState, setAction }) => {
  const [ selectedAction, setSelectedAction ] = useState<Action>({
    id: 1,
    action: 'Create an app'
  });
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const actionsCollection: Action[] = useSelector((store:AppStore) => store.actions);
  const currentAction: string = selectedAction.action;

  const handleChange = (e:React.MouseEvent<HTMLElement>):void => {
    const { innerText } = e.target as HTMLElement;
    let newAction:(Action | undefined) = actionsCollection
      .find((action:Action) => action.action === innerText);
    if (newAction) {
      setSelectedAction(newAction);
    };
    setIsClicked(false);
  }

  const toggleBlock = (): void => setIsClicked(!isClicked);

  const updateAction = () => {
    let newChosenAction: (Action | undefined) = actionsCollection
      .find((action:Action) => action.action === currentAction);
    if (newChosenAction) {
      setAction({...formState, action: newChosenAction});
    };
  }

  useEffect(updateAction, [ selectedAction ]);
  useEffect(() => {
    if (formState.reset) return setSelectedAction({id: 1, action: 'Create an app'});
  }, [formState]);

  const actions:(JSX.Element | null)[] = actionsCollection
    .map((action:Action) => {
      return (currentAction.toLowerCase() !== action.action.toLowerCase())
        ? <li key={action.id} onClick={handleChange}>{action.action}</li>
        : null;
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
