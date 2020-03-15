import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './BrainstormForm.scss';
import broom from 'assets/broom.svg';
import down from 'assets/down.svg';
import IdeaQuestion from 'Components/IdeaQuestion/IdeaQuestion';
import CategoriesField from '../CategoriesField/CategoriesField';
import ActionsField from '../ActionsField/ActionsField';
import { IBrainstormForm, Category, Brainstorm } from 'interfaces';
import { addCurrentBrainstorm } from 'redux/actions';
import { useHistory } from 'react-router-dom';

interface Props {
  brainstormFormState: boolean,
  cancel: (brainstormFormState:boolean) => void
}
const BrainstormForm:React.FC<Props> = ({ brainstormFormState, cancel }) => {
  const [ formState, setFormState ] = useState<IBrainstormForm>({
    question: '',
    categories: [],
    action: {id: 1, action: 'Create an App'},
    reset: false
  });
  const [ disabled, setIsDisabled ] = useState<boolean>(true);
  const [ error, setError ] = useState<string>('');
  const [ summary, setSummary ] = useState<string>('');
  const [ isClickedCategory, setIsClickedCategory ] = useState<boolean>(false);
  const dispatch = useDispatch();
  let history = useHistory();

  const cancelForm = ():void => {
    cancel(!brainstormFormState);
  };

  const resetForm = ():void => {
    setFormState({
      question: '',
      categories: [],
      action: {id: 1, action: 'Create an App'},
      reset: !formState.reset
    });
    setSummary('');
  };

  const validateFields = (state: IBrainstormForm): boolean => (
    state.question.length > 0 && state.categories.length > 0
  );

  const writeError = ():void => {
    if (formState.question === '') return setError('Please add a question');
    if (formState.categories === []) return setError('Please select a category');
  };

  const writeSummary = ():void => {
    let categoriesSum: string[] = formState.categories.map((ctg:Category) => {
      return (ctg.name === 'Environment')
        ? 'the environment'
        : ctg.name.toLowerCase();
    });

    setSummary(`I want to ${formState.action.action.toLowerCase()} about ${categoriesSum.join(', ')} to answer the question: ${formState.question}`);
  };

  const handleSubmit = ():void => {
    let currentBS: Brainstorm = {
      id: Date.now(),
      question: formState.question,
      response: '',
      action: formState.action,
      isGenius: false,
      categories: formState.categories
    };

    validateFields(formState)
      ? dispatch(addCurrentBrainstorm(currentBS))
      : writeError();

    history.push('/instructions/first-rd');
  };

  const toggleCategory = (): void => setIsClickedCategory(!isClickedCategory);

  useEffect(() => {
    if (formState.reset) return setFormState({...formState, reset: false});
  }, [formState]);

  useEffect(() => {
    if (!formState.action) {
      setFormState({...formState, action: {id: 1, action: 'Create an App'}});
    }
    if (validateFields(formState)) {
      setIsDisabled(false);
      writeSummary();
    } else {
      setIsDisabled(true);
    }
  }, [formState]); //eslint-disable-line

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
        <button type='button' className='cancel-btn' onClick={cancelForm}>cancel</button>
        <button type='button' onClick={resetForm} className='clean-btn'><img className='broom' alt='broom-icon' src={broom}/></button>
        <button type='button' onClick={handleSubmit} disabled={disabled} className='start-btn'>start</button>
      </div>
    </form>
  );
}

export default BrainstormForm;
