import React, { useState, useEffect } from 'react';
import './BrainstormForm.scss';
import broom from '../../assets/broom.svg';
import IdeaQuestion from '../../Components/IdeaQuestion/IdeaQuestion';
import CategoriesField from '../CategoriesField/CategoriesField';
import ActionsField from '../ActionsField/ActionsField';
import { IBrainstormForm } from '../../interfaces';

interface Props {
  brainstormFormState: boolean,
  cancel: (brainstormFormState:boolean) => void;
}
const BrainstormForm:React.FC<Props> = ({brainstormFormState, cancel }) => {
  const [ formState, setFormState ] = useState<IBrainstormForm>({
    question: '',
    categories: [],
    action: 'create an app',
    reset: false
  })

  const resetReset = () => {
    setFormState({...formState, reset: false})
  }

  const resetForm = ():void => {
      setFormState({
        question: '',
        categories: [],
        action: 'create an app',
        reset: true
      })
      cancel(!brainstormFormState)
  }

  useEffect(() => {
    if (formState.reset) {
      return resetReset()
    }
  })

  return (
    <form className='brainstorm-form'>
      <h2 className='brainstorm-form-h2'>CREATE NEW BRAINSTORM</h2>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>IDEA QUESTION</label>
        <IdeaQuestion formState={formState} setQuestion={setFormState} />
      </div>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>CATEGORIES</label>
        <CategoriesField formState={formState} setCategory={setFormState}/>
      </div>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>DESIRED ACTION</label>
        <ActionsField formState={formState} setAction={setFormState}/>
      </div>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>SUMMARY</label>
        <textarea className='brainstorm-summary-textarea' placeholder='Typed summary here...'></textarea>
      </div>
      <div className='brainstorm-form-menu'>
        <button type='button' className='cancel-btn' onClick={resetForm}>cancel</button>
        <img className='broom' alt='broom-icon' src={broom}/>
        <button className='start-btn'>start</button>
      </div>
    </form>
  )
}

export default BrainstormForm;