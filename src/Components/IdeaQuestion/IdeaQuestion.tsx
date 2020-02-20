import React, { useState, useEffect } from 'react';
import './IdeaQuestion.scss';
import { IBrainstormForm } from '../../interfaces';

interface Props {
  formState: IBrainstormForm;
  setQuestion: (formState: IBrainstormForm) => void;
}

const IdeaQuestion:React.FC<Props>= ({ formState, setQuestion }) => {
  const [ questionValue, setQuestionValue ] = useState<string>('');
  // const [ reset, setReset ] = useState<boolean>(formState.reset);
  // use Redux to trigger form sweep

  const updateQuestion = () => {
    setQuestion({...formState, question: questionValue})
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setQuestionValue(e.target.value)
  }

  useEffect(updateQuestion, [questionValue])

  // if (reset) {
  //   setQuestionValue('')
  // }

  return (
    <input className='idea-question-input' value={questionValue} type='text' 
    placeholder='Enter your idea here...' onChange={handleChange}/>
  )
}

export default IdeaQuestion;