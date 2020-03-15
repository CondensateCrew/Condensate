import React, { useState, useEffect } from 'react';
import './BrainstormCategory.scss';
import { IBrainstormForm, Category } from '../../interfaces';

interface Props {
  category: Category,
  formState: IBrainstormForm,
  setCategory: (formState: IBrainstormForm) => void
}

const BrainstormCategory:React.FC<Props> = (props) => {
  const { category, formState, setCategory } = props;
  const [ active, setActive ] = useState<boolean>(false);

  const toggleActive = (): void => setActive(!active);

  const addRemoveCategory = (): void => {
    const { categories } = formState;
    const newCategories: Category[] = active
      ? [...categories, category]
      : categories.filter((ctg:Category) => ctg !== category);

    setCategory({...formState, categories: newCategories});
  };

  useEffect(() => {
    if(formState.categories.includes(category)) {
      setActive(true);
    }
  }, [ category, formState ]);

  useEffect(addRemoveCategory, [ active ]);

  useEffect(() => {
    if (formState.reset) return setActive(false);
  }, [formState]);

  const btnClassName: string = active ? 'category-btn active' : 'category-btn';

  return (
    <button type='button' className={btnClassName} value={category.name} onClick={toggleActive}>{category.name}</button>
  );
}

export default BrainstormCategory;
