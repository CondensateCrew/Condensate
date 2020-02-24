import React from 'react';
import './FinalIdeaField.scss';
import edit from '../../assets/edit.svg';

const FinalIdeaField:React.FC = () => {
  return (
    <section className='final-idea-field-section'>
      <div className='final-idea-question-div'>
        <h3>Original Question that was asked?</h3>
        <img src={edit} alt='pencil'/>
      </div>
      <div className='final-idea-field-div'>
        <textarea placeholder="Type your idea here..."></textarea>
        <button>Post Idea</button>
      </div>
    </section>
  )
}

export default FinalIdeaField;