import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { postBrainstorm } from 'apiCalls/apiCalls';
import { AppStore } from 'interfaces';
import './FinalIdeaField.scss';
// import edit from '../../assets/edit.svg';
import { useHistory } from 'react-router-dom';

const FinalIdeaField:React.FC = () => {
  const [ brainstormIdea, setBrainstormIdea ] = useState<string>('');
  const { id, action, isGenius, question, categories } = useSelector((state: AppStore) => ({
    id: state.user.id,
    action: state.currentBrainstorm.action,
    isGenius: state.currentBrainstorm.isGenius,
    question: state.currentBrainstorm.question,
    categories: state.currentBrainstorm.categories
  }));
  let history = useHistory();

const originalQuestion = useSelector((state:AppStore) => state.currentBrainstorm.question)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBrainstormIdea(e.target.value)
  }

  const postBrainstormIdea = async () => {
    const brainstorm = {
      idea: brainstormIdea,
      id,
      action,
      isGenius,
      question,
      categories
    }

    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(brainstorm)
    }

    const res = await postBrainstorm(options) //eslint-disable-line
    history.push('/dashboard')
  }

  return (
    <section className='final-idea-field-section'>
      <div className='final-idea-question-div'>
        <h3>{originalQuestion}</h3>
        {
          // <img src={edit} alt='pencil'/>
        }
      </div>
      <div className='final-idea-field-div'>
        <textarea onChange={handleChange} value={brainstormIdea}
        placeholder="Type your idea here..."></textarea>
        <button onClick={postBrainstormIdea}>Post Idea</button>
      </div>
    </section>
  )
}

export default FinalIdeaField;
