import React from 'react';
import BrainstormAction from '../../Components/BrainstormAction/BrainstormAction';

const ActionsField:React.FC = () => {
  return (
    <select className='actions-dropdown-menu'>
      <option>Default</option>
      <BrainstormAction />
    </select>
  )
}

export default ActionsField;