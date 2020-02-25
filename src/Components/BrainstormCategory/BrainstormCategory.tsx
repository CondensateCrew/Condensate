import React, { useState, useEffect } from 'react';
import './BrainstormCategory.scss';
import { IBrainstormForm, Category } from '../../interfaces';
interface Props {
  category: Category,
  formState: IBrainstormForm,
  setCategory: (formState: IBrainstormForm) => void;
}
const BrainstormCategory:React.FC<Props> = ({ category, formState, setCategory }) => {
  const [ active, setActive ] = useState<boolean>(false);

  const toggleActive = (): void => setActive(!active);

  const addRemoveCategory = (): void => {
    if (active) {
      setCategory({...formState, categories: [...formState.categories, category]})
    }
    if (!active) {
      let newCategories = formState.categories.filter((ctg:Category) => ctg !== category)
      setCategory({...formState, categories: newCategories})
    }
  }

  useEffect(() => {
    if(formState.categories.includes(category)) {
      setActive(true);
    }
  }, [ category, formState ]);

  useEffect(addRemoveCategory, [ active ]);

  const btnClassName = active ? 'category-btn active' : 'category-btn';

  return (
    <button type='button' className={btnClassName} value={category.name} onClick={toggleActive}>{category.name}</button>
  )
}

export default BrainstormCategory;
