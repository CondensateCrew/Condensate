import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postBrainstorm } from 'apiCalls/apiCalls';
import { AppStore, Brainstorm, Category } from 'interfaces';
import { addNewBrainstorm } from 'redux/actions';
import './FinalIdeaField.scss';
// import edit from '../../assets/edit.svg';
import { useHistory } from 'react-router-dom';

interface postedBrainstorm {
  idea: string,
  id: string,
  action: string,
  isGenius: boolean,
  question: string,
  categories: Category[]
}

const FinalIdeaField:React.FC = () => {
  const [ brainstormIdea, setBrainstormIdea ] = useState<string>('');
  const dispatch = useDispatch();
  const { id, action, isGenius, question, categories } = useSelector((state: AppStore) => ({
    id: state.user.id,
    action: state.currentBrainstorm.action,
    isGenius: state.currentBrainstorm.isGenius,
    question: state.currentBrainstorm.question,
    categories: state.currentBrainstorm.categories
  }));
  let history = useHistory();

  const originalQuestion = useSelector((state:AppStore) => state.currentBrainstorm.question);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBrainstormIdea(e.target.value);
  };

  const postBrainstormIdea = async () => {
    const brainstorm: postedBrainstorm = {
      idea: brainstormIdea,
      id,
      action: action.action,
      isGenius,
      question,
      categories
    };

    const otherBrainstorm: Brainstorm = {
      response: brainstormIdea,
      id: Date.now(),
      action: action,
      isGenius,
      question,
      categories
    };

    await postBrainstorm(brainstorm);
    dispatch(addNewBrainstorm(otherBrainstorm));
    history.push('/dashboard');
  };

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
        <button type='button' onClick={postBrainstormIdea}>Post Idea</button>
      </div>
    </section>
  );
}

export default FinalIdeaField;
