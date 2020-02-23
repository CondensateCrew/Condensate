import React, { useState, useEffect } from 'react';
import BrainstormAction from '../../Components/BrainstormAction/BrainstormAction';
import mockActions from '../../data/mockActions';
import './ActionsField.scss';

import { IBrainstormForm } from '../../interfaces';

interface Props {
  formState: IBrainstormForm
  setAction: (formState: IBrainstormForm) => void;
}

const ActionsField:React.FC<Props> = ({ formState, setAction }) => {
  const [ selectedAction, setSelectedAction ] = useState<string>('create an app')

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    setSelectedAction(e.target.value)
  }

  const updateAction = () => {
    setAction({...formState, action: selectedAction})
  }

  useEffect(updateAction, [selectedAction])

  const actions = mockActions.map((action:string, index:number) => <BrainstormAction 
  key={index} action={action}/>)


  return (
    <div>
      <select value={selectedAction} onChange={handleChange} className='actions-dropdown-menu'>
        {actions}
      </select>
    </div>
  )
}

export default ActionsField;