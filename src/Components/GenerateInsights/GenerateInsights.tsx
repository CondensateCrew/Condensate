import React from 'react';
import Close from '../../assets/close.svg';
import './GenerateInsights.scss';

interface Props {
  text: string,
  responses: string[],
  setResponses: (responses: string[]) => void
  key:number,
  id:number
}

const GenerateInsights:React.FC<Props> = ({ text, responses, setResponses, key, id }) => {

  const removeResponse = (e: React.SyntheticEvent<HTMLElement>):void => {
    let newResponses = responses;
    newResponses.splice(id, 1)
    setResponses([...newResponses])
  }

  return (
    <div className='insights-div' key={key} id={id.toString()}>
      <h3>{text}</h3>
      <img onClick={removeResponse} src={Close} alt='delete icon' />
    </div>
  )
}

export default GenerateInsights;