import React from 'react';
import './IdeaQuestion.scss';

const IdeaQuestion:React.FC = () => {
  return (
    <input className='idea-question-input' type='text' 
    placeholder='Enter your idea here...'/>
  )
}

export default IdeaQuestion;