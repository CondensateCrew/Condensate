import './Instructions.scss';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from 'interfaces';
import Header from 'Components/Header/Header';
import { endInstructions, reverseInstructions } from 'redux/actions';
import { Redirect } from 'react-router-dom';

const Instructions:React.FC = () => {
  const dispatch = useDispatch();
  const instructionsEnded = useSelector((store: AppStore) => store.instructionsEnded);
  const instructions = [
    'In the next 90 seconds choose 9 words',
    'Choose whichever words compel you',
    'They should elicit positive feelings',
    'Relax',
    'Enjoy'
  ];
  const [ line, setLine ] = useState<string>('');
  const [ count, setCount ] = useState<number>(0);

  useEffect(() => {
    dispatch(reverseInstructions());
    setLine(instructions[0]);
    setCount(1);
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setLine(instructions[count]);
      setCount(count + 1);
    }, 6000);

    return () => clearInterval(timer);
  }, [instructions, count]);

  useEffect(() => {
    if (count > instructions.length) {
      dispatch(endInstructions());
    }
  }, [ count, dispatch ]);

  return (
    <main className="instructions">
      <Header />
      <section>
        { instructionsEnded
          ? <Redirect to='/round-one' />
          : <p>{line}</p>
        }
      </section>
    </main>
  )
}

export default Instructions;
