import './BrainstormContainer.scss';
import React from 'react';
import { useSelector } from "react-redux";
import { Brainstorm, AppStore, Category } from 'interfaces';
import BrainstormCard from 'Components/BrainstormCard/BrainstormCard';

const BrainstormContainer:React.FC = () => {
  const { allBrainstorms, queryValue, filterValue} = useSelector((state: AppStore) => ({
    allBrainstorms: state.allBrainstorms,
    queryValue: state.query,
    filterValue: state.filter
  }));

  const filteredBrainstorms: Brainstorm[] = allBrainstorms
    .filter((bs: Brainstorm) => (
      ((filterValue === 'genius' && bs.isGenius === true)
      ||
      bs.categories.find((ctg: Category) => {
        return (filterValue === '')
          ? ctg.name !== filterValue
          : ctg.name === filterValue
      }))
      && (bs.question.toLowerCase().includes(queryValue.toLowerCase())
      || bs.response.toLowerCase().includes(queryValue.toLowerCase())
      || bs.action.action.toLowerCase().includes(queryValue.toLowerCase()))
    ));

  const cards:JSX.Element[] = filteredBrainstorms.map((bs:Brainstorm) => (
    <BrainstormCard key={`bs-${bs.id}`} {...bs} />
  ));

  return (
    <section className="bs-container">
      { cards }
    </section>
  );
}

export default BrainstormContainer;
