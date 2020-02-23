import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './BrainstormForm.scss';
import broom from 'assets/broom.svg';
import IdeaQuestion from 'Components/IdeaQuestion/IdeaQuestion';
import CategoriesField from '../CategoriesField/CategoriesField';
import ActionsField from '../ActionsField/ActionsField';
import { IBrainstormForm } from 'interfaces';
import { addCurrentBrainstorm } from '../../redux/actions';

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
  });
  const [ disabled, setIsDisabled ] = useState<boolean>(true);
  const [ error, setError ] = useState<string>('');
  const dispatch = useDispatch();

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

  const validateFields = (state: IBrainstormForm) => {
    if (state.question.length > 0 && state.categories.length > 0) {
      return true
    }
      return false
  }

  const writeError = ():void => {
    if (formState.question === '') return setError('Please add a question');
    if (formState.categories === []) return setError('Please select a category');
  }

  const handleSubmit = ():void => {
    let currentBS = {
      id: 4,
      question: formState.question,
      idea: '',
      action: formState.action,
      isGenius: false,
      categories: formState.categories
    }
    validateFields(formState) ? dispatch(addCurrentBrainstorm(currentBS))
    : writeError();
  }



  useEffect(() => {
    if (formState.reset) {
      return resetReset()
    }
  })

  return (
    <form className='brainstorm-form'>
      {error !== '' && <p className="error-notification">{error}</p>}
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
        <button type='button' className='start-btn'>start</button>
      </div>
    </form>
  )
}

export default BrainstormForm;