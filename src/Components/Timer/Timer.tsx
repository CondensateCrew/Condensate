import React from 'react';

const Timer:React.FC = () => {
  return (
    <p>This is the timer component...it will require updates to state
      every second, via a setTimeout, until the value has reached 0, and
      then will dispatch to the store
    </p>
  )
}
