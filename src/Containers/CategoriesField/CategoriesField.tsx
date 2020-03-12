import React from 'react';
import './CategoriesField.scss';
import BrainstormCategory from '../../Components/BrainstormCategory/BrainstormCategory';
import mockCategories from '../../data/mockCategories';
// import addIcon from '../../assets/add.svg';
import { IBrainstormForm, Category } from '../../interfaces';

interface Props {
  formState: IBrainstormForm,
  setCategory: (formState: IBrainstormForm) => void
};

const CategoryField:React.FC<Props>= ({ formState, setCategory }) => {
  const categories: JSX.Element[] = mockCategories.map((category: Category, index:number) => (
    <BrainstormCategory
      key={index}
      category={category}
      formState={formState}
      setCategory={setCategory}/>
  ));

  return (
    <section className='category-field-section'>
      {
        // <img className='add-category-btn' alt='add-icon' src={addIcon}/>
      }
      {categories}
    </section>
  );
}

export default CategoryField;
