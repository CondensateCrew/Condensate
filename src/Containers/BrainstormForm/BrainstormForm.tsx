import React, { useState } from 'react';
import './BrainstormForm.scss';
import broom from '../../assets/broom.svg';
import IdeaQuestion from '../../Components/IdeaQuestion/IdeaQuestion';
import CategoriesField from '../CategoriesField/CategoriesField';
import ActionsField from '../ActionsField/ActionsField';

const BrainstormForm:React.FC = () => {
  const [ question, setQuestion ] = useState<string>('');
  const [ categories, setCategory ] = useState([]);
  const [ actions, setAction ] = useState([]);

  return (
    <form className='brainstorm-form'>
      <h2 className='brainstorm-form-h2'>CREATE NEW BRAINSTORM</h2>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>IDEA QUESTION</label>
        <IdeaQuestion setQuestion={setQuestion}/>
      </div>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>CATEGORIES</label>
        <CategoriesField />
      </div>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>DESIRED ACTION</label>
        <ActionsField />
      </div>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>SUMMARY</label>
        <textarea className='brainstorm-summary-textarea' placeholder='Typed summary here...'></textarea>
      </div>
      <div className='brainstorm-form-menu'>
        <button className='cancel-btn'>cancel</button>
        <img className='broom' src={broom}/>
        <button className='start-btn'>start</button>
      </div>
    </form>
  )
}

export default BrainstormForm;