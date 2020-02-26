import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.scss';
import { Category, AppStore } from 'interfaces';
import BrainstormContainer from '../BrainstormContainer/BrainstormContainer';
import SearchBar from '../SearchBar/SearchBar';
import CategoriesFilter from '../CategoriesFilter/CategoriesFilter';
import BrainstormForm from '../BrainstormForm/BrainstormForm';
import UserProfile from '../../Components/UserProfile/UserProfile';
import addIcon from '../../assets/add.svg';

const categories: Category[] = [
  {id: 1, name: 'Tech'},
  {id: 2, name: 'Education'},
  {id: 3, name: 'Environment'},
  {id: 4, name: 'Money'},
  {id: 5, name: 'Food'}];

const Dashboard: React.FC = () => {
  const [ brainstormFormState, setBrainstormForm ] = useState<boolean>(false);
  const categories = useSelector((store:AppStore) => store.categories);
  let brainstormForm;

  const toggleMenu = () => {
    setBrainstormForm(!brainstormFormState)
  };

  return (
    <main className="dashboard">
      <aside className='aside'>
        <h1>condensate</h1>
        <UserProfile />
        {
          brainstormFormState
          ? <BrainstormForm
            brainstormFormState={brainstormFormState}
            cancel={setBrainstormForm}/>
          : <div className='dashboard-brainstorm-form-div'>
              <button>
                <img onClick={toggleMenu} alt='add-icon' src={addIcon}/>
              </button>
              <h3>start new brainstorm</h3>
            </div>
        }
      </aside>
      <header>
        <CategoriesFilter {...{categories}} />
        <SearchBar />
      </header>
      <main><BrainstormContainer /></main>
    </main>
  )
}

export default Dashboard;
