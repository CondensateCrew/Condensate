import React from 'react';
import './Instruction.scss';

const Instruction = () => {
  return (
    <aside className='instruction-aside'>
      <h3 className='instruction-h3'>Instructions</h3>
      <p className='instruction-p'>For each chosen word, 
        you will be asked to come up with as many questions as you can in the time alloted.
        <br/><br/>The more spontaneous and provocative the better!
        <br/><br/>Example:<br/><br/> 'When does a goose choose to fly?'</p>
    </aside>
  )
}

export default Instruction;