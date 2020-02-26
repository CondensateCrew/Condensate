import './BrainstormContainer.scss';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addAllBrainstorms } from 'redux/actions';
import { Brainstorm, AppStore } from 'interfaces';
import mockBrainstorms from './mockData'
import BrainstormCard from 'Components/BrainstormCard/BrainstormCard';

const BrainstormContainer:React.FC = () => {
  const { allBrainstorms, queryValue, filterValue} = useSelector((state: AppStore) => ({
    allBrainstorms: state.allBrainstorms,
    queryValue: state.query,
    filterValue: state.filter
  }));

  const filteredBrainstorms: Brainstorm[] = allBrainstorms
    .filter((bs: Brainstorm) => (
      filterValue === 'genius' && bs.isGenius === true//eslint-disable-line
      ||//eslint-disable-line
      bs.categories.find(ctg => {
        return (filterValue === '')
          ? ctg.name !== filterValue
          : ctg.name === filterValue
      })
      && (bs.question.toLowerCase().includes(queryValue.toLowerCase())//eslint-disable-line
      || bs.response.toLowerCase().includes(queryValue.toLowerCase())//eslint-disable-line
      || bs.action.action.toLowerCase().includes(queryValue.toLowerCase()))//eslint-disable-line
    ));

  const cards = filteredBrainstorms.map((bs: Brainstorm) => (
    <BrainstormCard key={`bs-${bs.id}`} {...bs} />
  ));

  return (
    <section className="bs-container">
      { cards }
    </section>
  )
}

export default BrainstormContainer;
