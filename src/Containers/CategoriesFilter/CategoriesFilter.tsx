import './CategoriesFilter.scss';
import React, { MouseEvent, useState } from 'react';
import { Category, AppStore } from 'interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from 'redux/actions';
import dropdown from 'assets/down.svg';
import close from 'assets/close.svg';

interface Props {
  categories: Category[];
};

const CategoriesFilter:React.FC<Props> = ({categories}) => {
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const dispatch = useDispatch();
  const filter = useSelector((state: AppStore) => state.filter);
  const filterCard = (event: MouseEvent<HTMLButtonElement>): void => {
    const { id } = event.target as HTMLButtonElement;
    dispatch(addFilter(id));
    setIsClicked(false);
  };
  const clearFilter = (): void => {
    dispatch(removeFilter());
    setIsClicked(false);
  };
  const allBlocks = categories.map((ctg: Category) => (
    <button key={ctg.id} id={ctg.name} onClick={filterCard}>{ctg.name}</button>
  ));

  const firstCategories = categories.map((ctg: Category, ind: number) => (
    ind < 2 && <button key={ctg.id} id={ctg.name} onClick={filterCard}>{ctg.name}</button>
  ));

  const toggleBlock = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsClicked(!isClicked);
  }

  const closedBlock = (
    <section className="filter closed-filter">
      {
        filter !== ''
        ? <>
          <button className="chosen-filter">{filter}</button>
          <button className="close-btn" onClick={clearFilter}>
            <img src={close} alt="dropdown"/>
          </button>
        </>
        : <>
          <button id="genius" onClick={filterCard}>Genius</button>
          { firstCategories }
          <button className="openning-btn" onClick={toggleBlock}>
            <img src={dropdown} alt="dropdown"/>
          </button>
        </>
      }
    </section>
  );

  const openedBlock = (
    <section className="filter">
      <div className="opened-filter">
        <div>
          <button id="genius" className="genius-btn">Genius</button>
          { allBlocks }
        </div>
        <img src={dropdown} alt="dropdown" onClick={toggleBlock}/>
      </div>
    </section>
  );

  return !isClicked
    ? closedBlock
    : openedBlock;
}

export default CategoriesFilter;
