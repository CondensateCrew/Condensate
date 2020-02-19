import React, { useState } from 'react';

const SearchBar:React.FC = () => {
  const [ isSearching, setSearching ] = useState<boolean>(false);

  let bar;
  
  const toggleSearching = ():void => {
    setSearching(!isSearching)
  }

  !isSearching ? bar = (<img onClick={toggleSearching}>Arrow</img>)
  : bar = (<div><input type='text' placeholder='Search by topic'></input></div>)
  
  return (
    <>
    {bar}
    </>
  )
}
