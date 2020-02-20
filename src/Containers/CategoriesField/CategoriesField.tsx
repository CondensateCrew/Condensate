import React from 'react';
import './CategoriesField.scss';
import BrainstormCategory from '../../Components/BrainstormCategory/BrainstormCategory';
import mockCategories from '../../data/mockCategories';
import addIcon from '../../assets/add.svg';
import { IBrainstormForm } from '../../interfaces';

interface Props {
  formState: IBrainstormForm
  setCategory: (formState: IBrainstormForm) => void
}

const CategoryField:React.FC<Props>= ({ formState, setCategory }) => {
  const categories = mockCategories.map((category:string, index:number) => <BrainstormCategory key={index} category={category}
  formState={formState} setCategory={setCategory}/>)
  return (
    <section className='category-field-section'>
      {categories}
      <img className='add-category-btn' alt='add-icon' src={addIcon}/>
    </section>
  )
}

export default CategoryField;