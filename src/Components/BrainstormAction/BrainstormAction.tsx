import React from 'react';

interface Props {
  action: string,
  key: number,
}
const BrainstormAction:React.FC<Props>= ({ action }) => {
  return (
    <option>{action}</option>
  )
}

export default BrainstormAction;