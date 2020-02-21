import React, { useState } from 'react';
import './Dashboard.scss';
import { Category } from 'interfaces';
import BrainstormContainer from '../BrainstormContainer/BrainstormContainer';
import SearchBar from '../SearchBar/SearchBar';
import CategoriesFilter from '../CategoriesFilter/CategoriesFilter';
import BrainstormForm from '../BrainstormForm/BrainstormForm';
import addIcon from '../../assets/add.svg';

const categories: Category[] = [
  {id: 1, name: 'Tech'},
  {id: 2, name: 'Education'},
  {id: 3, name: 'Enviroment'},
  {id: 4, name: 'Money'},
  {id: 5, name: 'Food'}];

const Dashboard: React.FC = () => {
  const [ brainstormFormState, setBrainstormForm ] = useState<boolean>(false)
  let brainstormForm;

  const toggleMenu = () => {
    setBrainstormForm(!brainstormFormState)
  }

  brainstormFormState ? brainstormForm = (<BrainstormForm brainstormFormState={brainstormFormState}
    cancel={setBrainstormForm}/>)
  : brainstormForm = (<div onClick={toggleMenu} className='dashboard-brainstorm-form-div'>
    <img className='add-icon-dashboard' alt='add-icon' src={addIcon}/>
    <h3>create new brainstorm</h3>
  </div>)

  return (
    <main className="dashboard">
      <aside>
        <h1>condensate</h1>
        {brainstormForm}
      </aside>
      <header>
        <CategoriesFilter {...{categories}} />
        <SearchBar />
      </header>
      <BrainstormContainer />
    </main>
  )
}

export default Dashboard;
