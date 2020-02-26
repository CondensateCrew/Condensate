import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentBrainstorm } from 'redux/actions';
import { postBrainstorm } from 'apiCalls/apiCalls';
import { AppStore } from 'interfaces';
import mockCurrentBrainstorm from 'data/mockCurrentBrainstorm';
import './FinalIdeaField.scss';
// import edit from '../../assets/edit.svg';

const FinalIdeaField:React.FC = () => {
  const [ brainstormIdea, setBrainstormIdea ] = useState<string>('');
  const dispatch = useDispatch();
  const { id, action, isGenius, question, categories } = useSelector((state: AppStore) => ({
    id: state.user.id,
    action: state.currentBrainstorm.action,
    isGenius: state.currentBrainstorm.isGenius,
    question: state.currentBrainstorm.question,
    categories: state.currentBrainstorm.categories
  }))

  useEffect(() => {
    dispatch(addCurrentBrainstorm(mockCurrentBrainstorm))
  }, [dispatch])

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
