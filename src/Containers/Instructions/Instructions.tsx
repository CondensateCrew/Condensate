import './Instructions.scss';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from 'interfaces';
import Header from 'Components/Header/Header';
import { endInstructions, reverseInstructions, reverseTime } from 'redux/actions';
import { Redirect } from 'react-router-dom';
import types from './instructionsData';

interface Props {
  type: string
};

const Instructions:React.FC<Props> = ({ type }) => {
  const instructions: string[] = types[type].instructions;
  const link: string = types[type].link;
  const dispatch = useDispatch();
  const instructionsEnded: boolean = useSelector((store: AppStore) => store.instructionsEnded);
  const [ line, setLine ] = useState<string>('');
  const [ count, setCount ] = useState<number>(0);

  useEffect(() => {
    dispatch(reverseInstructions());
    dispatch(reverseTime());
    setLine(instructions[0]);
    setCount(1);
  }, [dispatch, instructions])

  useEffect(() => {
    const timer = setInterval(() => {
      setLine(instructions[count]);
      setCount(count + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [instructions, count]);

  useEffect(() => {
    if (count > instructions.length) dispatch(endInstructions());
  }, [ count, dispatch, instructions.length ]);

  return (
    <main className="instructions">
      <Header />
      <section>
        { instructionsEnded
          ? <Redirect to={link} />
          : <p>{line}</p>
        }
      </section>
    </main>
  );
}

export default Instructions;
