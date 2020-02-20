import './SearchBar.scss';
import React, { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addQuery, removeQuery } from 'redux/actions';
import search from 'assets/search.svg';
import closeIcon from 'assets/close.svg';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const [ isSubmitted, setIsSubmitted ] = useState<boolean>(false);
  const [ query, setQuery ] = useState<string>('');

  const toggleForm = () => setIsClicked(!isClicked);

  const handleChanges = (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

  const submitQuery = (event: FormEvent<HTMLFormElement> | MouseEvent): void => {
    event.preventDefault();
    if (query === '') return toggleForm();
    dispatch(addQuery(query));
    setIsSubmitted(!isSubmitted);
  };

  const cleanForm = () => {
    toggleForm();
    dispatch(removeQuery());
    setQuery('');
  };

  return (
    <>
      {(!isClicked)
        ? <button
          className="short-search-btn"
          onClick={toggleForm}>
            <img src={search} alt="search" onClick={submitQuery}/>
          </button>
        : <form onSubmit={submitQuery} className="search-form">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleChanges}/>
          {
            (!isSubmitted)
              ? <img src={search} alt="search" onClick={submitQuery}/>
              : <img src={closeIcon} alt="close" onClick={cleanForm}/>
          }
        </form>
      }
    </>
  )
}

export default SearchBar;
