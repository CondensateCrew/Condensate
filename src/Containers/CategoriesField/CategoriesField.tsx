import React from 'react';
import './CategoriesField.scss';
import BrainstormCategory from '../../Components/BrainstormCategory/BrainstormCategory';
import mockCategories from '../../data/mockCategories';

const CategoryField:React.FC = () => {
  const categories = mockCategories.map((category:string, index:number) => <BrainstormCategory key={index} category={category}/>)
  return (
    <section className='category-field-section'>
      {categories}
    </section>
  )
}

export default CategoryField;