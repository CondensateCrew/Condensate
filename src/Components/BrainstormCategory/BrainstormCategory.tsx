import React from 'react';
import './BrainstromCategory.scss';

interface Props {
  category:string
}
const BrainstormCategory:React.FC<Props> = ({ category }) => {
  return (
    <button className='category-btn'>{category}</button>
  )
}

export default BrainstormCategory;