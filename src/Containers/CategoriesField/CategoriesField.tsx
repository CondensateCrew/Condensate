import React from 'react';
import './CategoriesField.scss';
import { useSelector } from 'react-redux';
import { AppStore } from 'interfaces';
import BrainstormCategory from '../../Components/BrainstormCategory/BrainstormCategory';
// import addIcon from '../../assets/add.svg';
import { IBrainstormForm, Category } from '../../interfaces';

interface Props {
  formState: IBrainstormForm,
  setCategory: (formState: IBrainstormForm) => void
};

const CategoryField:React.FC<Props>= ({ formState, setCategory }) => {
  const categoriesData = useSelector((store:AppStore) => store.categories)
  const categories: JSX.Element[] = categoriesData.map((category: Category, index:number) => (
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
