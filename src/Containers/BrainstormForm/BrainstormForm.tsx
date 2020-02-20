import React, { useState } from 'react';
import './BrainstormForm.scss';
import broom from '../../assets/broom.svg';
import IdeaQuestion from '../../Components/IdeaQuestion/IdeaQuestion';
import CategoriesField from '../CategoriesField/CategoriesField';
import ActionsField from '../ActionsField/ActionsField';
import { IBrainstormForm } from '../../interfaces';

interface Categories {
  categories: string[],
}

const BrainstormForm:React.FC = () => {
  const [ formState, setFormState ] = useState<IBrainstormForm>({
    question: '',
    categories: [],
    action: ''
  })

  const [ action, setAction ] = useState<string>('create an app');

  return (
    <form className='brainstorm-form'>
      <h2 className='brainstorm-form-h2'>CREATE NEW BRAINSTORM</h2>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>IDEA QUESTION</label>
        <IdeaQuestion formState={formState} setQuestion={setFormState}/>
      </div>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>CATEGORIES</label>
        <CategoriesField formState={formState} setCategory={setFormState}/>
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