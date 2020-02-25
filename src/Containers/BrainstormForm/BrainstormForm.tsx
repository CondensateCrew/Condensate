import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './BrainstormForm.scss';
import broom from 'assets/broom.svg';
import down from 'assets/down.svg';
import IdeaQuestion from 'Components/IdeaQuestion/IdeaQuestion';
import CategoriesField from '../CategoriesField/CategoriesField';
import ActionsField from '../ActionsField/ActionsField';
import { IBrainstormForm, Category } from 'interfaces';
import { addCurrentBrainstorm } from 'redux/actions';
import { useHistory } from 'react-router-dom';

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
  const [ summary, setSummary ] = useState<string>('');
  const [ isClickedCategory, setIsClickedCategory ] = useState<boolean>(false);
  const dispatch = useDispatch();
  let history = useHistory();

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

  const writeSummary = ():void => {
    let categoriesSum = formState.categories.map((ctg:Category) => {
      if (ctg.name === 'Environment') {
        return 'the environment'
      } else {
        return ctg.name.toLowerCase();
      }
    });

    setSummary(`I want to ${formState.action.toLowerCase()} about ${categoriesSum.join(', ')} to answer the question: ${formState.question}`)
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

    history.push('/instructions/first-rd');
  }

  const toggleCategory = (): void => setIsClickedCategory(!isClickedCategory);

  useEffect(() => {
      if (validateFields(formState)) {
        setIsDisabled(false)
        writeSummary();
      } else {
        setIsDisabled(true)
      }
  }, [formState])

  return (
    <form className='brainstorm-form'>
      {error !== '' && <p className="error-notification">{error}</p>}
      <h2 className='brainstorm-form-h2'>CREATE NEW BRAINSTORM</h2>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>IDEA QUESTION</label>
        <IdeaQuestion formState={formState} setQuestion={setFormState} />
      </div>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>CATEGORIES
          <img src={down} alt="down" onClick={toggleCategory}/>
        </label>
        {isClickedCategory && <CategoriesField formState={formState} setCategory={setFormState} />}
      </div>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>DESIRED ACTION</label>
        <ActionsField formState={formState} setAction={setFormState}/>
      </div>
      <div className='brainstorm-div'>
        <label className='brainstorm-label'>SUMMARY</label>
        <textarea readOnly className='brainstorm-summary-textarea' value={summary} placeholder='Typed summary here...'></textarea>
      </div>
      <div className='brainstorm-form-menu'>
        <button type='button' className='cancel-btn' onClick={resetForm}>cancel</button>
        <img className='broom' alt='broom-icon' src={broom}/>
        <button type='button' onClick={handleSubmit} disabled={disabled} className='start-btn'>start</button>
      </div>
    </form>
  )
}

export default BrainstormForm;
