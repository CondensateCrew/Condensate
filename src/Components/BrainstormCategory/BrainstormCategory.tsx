import React, { useState, useEffect } from 'react';
import './BrainstormCategory.scss';
import { IBrainstormForm, Category } from '../../interfaces';
interface Props {
  category: Category,
  formState: IBrainstormForm,
  setCategory: (formState: IBrainstormForm) => void;
}
const BrainstormCategory:React.FC<Props> = ({ category, formState, setCategory }) => {
  const [active, setActive] = useState<boolean>(false)

  const toggleActive = (e:React.MouseEvent<HTMLButtonElement>):void => {
    setActive(!active)
  }

  const addRemoveCategory = ():void => {
    if (active) {
      setCategory({...formState, categories: [...formState.categories, category]})
    }
    if (!active) {
      let newCategories = formState.categories.filter((ctg:Category) => ctg !== category)
      setCategory({...formState, categories: newCategories})
    }
  }

  useEffect(addRemoveCategory, [!active])
  let button; 

  active ? button = (<button type='button' className='category-btn active' value={category.name} onClick={toggleActive}>{category.name}</button>)
  : button = (<button type='button' className='category-btn' value={category.name} onClick={toggleActive}>{category.name}</button>)

  return (
    <>
    {button}
    </>
  )
}

export default BrainstormCategory;