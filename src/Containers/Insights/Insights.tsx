import React from 'react';
import Close from '../../assets/close.svg';
import './Insights.scss';

interface Props {
  text: string
}

const Insights:React.FC<Props> = ({ text }) => {
  return (
    <div className='insights-div'>
      <h3>{text}</h3>
      <img src={Close} alt='delete icon' />
    </div>
  )
}

export default Insights;