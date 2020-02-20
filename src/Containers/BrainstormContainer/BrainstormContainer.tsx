import './BrainstormContainer.scss';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addAllBrainstorms } from 'redux/actions';
import { Brainstorm, AppStore } from 'interfaces';
import mockBrainstorms from './mockData'
import BrainstormCard from 'Components/BrainstormCard/BrainstormCard';

const BrainstormContainer:React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAllBrainstorms(mockBrainstorms));
  }, [dispatch]);

  const { allBrainstorms, queryValue, filterValue} = useSelector((state: AppStore) => ({
    allBrainstorms: state.allBrainstorms,
    queryValue: state.query,
    filterValue: state.filter
  }));

  console.log(queryValue)
  const filteredBrainstorms: Brainstorm[] = allBrainstorms
    .filter((bs: Brainstorm) => (
      bs.categories.find(ctg => {
        return (filterValue === '')
          ? ctg.name !== filterValue
          : ctg.name === filterValue
      })
      && (bs.question.toLowerCase().includes(queryValue.toLowerCase())
      || bs.idea.toLowerCase().includes(queryValue.toLowerCase())
      || bs.action.toLowerCase().includes(queryValue.toLowerCase()))
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
