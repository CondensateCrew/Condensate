import React from 'react';
import './BrainstormForm.scss';
import IdeaQuestion from '../../Components/IdeaQuestion/IdeaQuestion';
import CategoriesField from '../CategoriesField/CategoriesField';
import ActionsField from '../ActionsField/ActionsField';

const BrainstormForm:React.FC = () => {
  return (
    <form className='brainstorm-form'>
      <h2 className='brainstorm-form-h2'>CREATE NEW BRAINSTORM</h2>
      <label className='brainstorm-label'>IDEA QUESTION</label>
      <IdeaQuestion />
      <label className='brainstorm-label'>CATEGORIES</label>
      <CategoriesField />
      <label className='brainstorm-label'>DESIRED ACTION</label>
      <ActionsField />
    </form>
  )
}

export default BrainstormForm;