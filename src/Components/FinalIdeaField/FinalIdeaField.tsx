import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './FinalIdeaField.scss';
import edit from '../../assets/edit.svg';

const FinalIdeaField:React.FC = () => {
  const [ brainstormIdea, setBrainstormIdea ] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBrainstormIdea(e.target.value)
  }

  const postBrainstormIdea = () => {
    // apiCall to POST final idea to the server, then redirect back to dashboard
  }
  
  return (
    <section className='final-idea-field-section'>
      <div className='final-idea-question-div'>
        <h3>Original Question that was asked?</h3>
        <img src={edit} alt='pencil'/>
      </div>
      <div className='final-idea-field-div'>
        <textarea onChange={handleChange} value={brainstormIdea}
        placeholder="Type your idea here..."></textarea>
        <button>Post Idea</button>
      </div>
    </section>
  )
}

export default FinalIdeaField;