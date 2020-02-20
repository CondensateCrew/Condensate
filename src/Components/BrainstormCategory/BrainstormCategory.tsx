import React, { useState, useEffect } from 'react';
import './BrainstormCategory.scss';

interface Props {
  category:string
}
const BrainstormCategory:React.FC<Props> = ({ category }) => {
  const [active, setActive] = useState<boolean>(false)

  const toggleActive = (e:React.MouseEvent<HTMLButtonElement>):void => {
    setActive(!active)
  }

  let button; 

  active ? button = (<button type='button' className='category-btn active' onClick={toggleActive}>{category}</button>)
  : button = (<button type='button' className='category-btn' onClick={toggleActive}>{category}</button>)

  return (
    <>
    {button}
    </>
  )
}

export default BrainstormCategory;