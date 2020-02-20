import React from 'react';
import './Dashboard.scss';
import { Category } from 'interfaces';
import BrainstormContainer from '../BrainstormContainer/BrainstormContainer';
import SearchBar from '../SearchBar/SearchBar';
import CategoriesFilter from '../CategoriesFilter/CategoriesFilter';

const categories: Category[] = [
  {id: 1, name: 'Tech'},
  {id: 2, name: 'Education'},
  {id: 3, name: 'Enviroment'},
  {id: 4, name: 'Money'},
  {id: 5, name: 'Food'}];

const Dashboard: React.FC = () => {
  return (
    <main className="dashboard">
      <aside>
        <h1>condensate</h1>
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
