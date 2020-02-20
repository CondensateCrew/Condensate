import React, { useState, useEffect } from 'react';
import BrainstormAction from '../../Components/BrainstormAction/BrainstormAction';
import mockActions from '../../data/mockActions';
import './ActionsField.scss';

interface Props {
  // actions: any[]
  // setAction: (action:string) => void;
}

const ActionsField:React.FC<Props> = () => {
  const [ selectedAction, setSelectedAction ] = useState<string>('create an app')

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    console.log(e.target.value)
    setSelectedAction(e.target.value)
  }

  // const updateAction = () => {
  //   setAction(selectedAction)
  // }

  // useEffect(updateAction, [selectedAction])

  const actions = mockActions.map((action:string, index:number) => <BrainstormAction 
  key={index} action={action}/>)


  return (
    <select onChange={handleChange} className='actions-dropdown-menu'>
      {actions}
    </select>
  )
}

export default ActionsField;