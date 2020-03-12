import React from 'react';
import './ExampleSentence.scss';

interface Props {
  exampleSentence: string;
};

const ExampleSentence:React.FC<Props> = ({ exampleSentence }) => {
  return (
    <h3 className='template-question-h3'>{exampleSentence}</h3>
  )
}

export default ExampleSentence;
