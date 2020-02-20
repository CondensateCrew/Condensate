import React, { useState, useEffect } from 'react';
import './IdeaQuestion.scss';

interface Props {
  setQuestion: (question: string) => void;
}

const IdeaQuestion:React.FC<Props>= ({ setQuestion }) => {
  const [ questionValue, setQuestionValue ] = useState<string>('');

  const updateQuestion = () => {
    setQuestion(questionValue)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setQuestionValue(e.target.value)
  }

  useEffect(updateQuestion, [questionValue])
  return (
    <input className='idea-question-input' type='text' 
    placeholder='Enter your idea here...' onChange={handleChange}/>
  )
}

export default IdeaQuestion;