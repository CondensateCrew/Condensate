import React from 'react';
import Close from '../../assets/close.svg';
import './GenerateInsights.scss';

interface Props {
  text: string,
  responses: string[],
  setResponses: (responses: string[]) => void
}

const GenerateInsights:React.FC<Props> = ({ text, responses, setResponses }) => {

  const removeResponse = ():void => {
    let newResponses = responses.filter((response:string) => response !== text)
    setResponses(newResponses)
  }

  return (
    <div className='insights-div'>
      <h3>{text}</h3>
      <img onClick={removeResponse} src={Close} alt='delete icon' />
    </div>
  )
}

export default GenerateInsights;