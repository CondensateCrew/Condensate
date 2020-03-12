import './Timer.scss';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { endTime } from 'redux/actions';

interface Props {
  time: number;
};

const Timer: React.FC<Props> = ({time}) => {
  const [ timerCount, setTimerCount ] = useState<number>(time);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerCount(timerCount - 1);
    }, 1000);
    if ( timerCount === 0 ) dispatch(endTime());
    return () => clearTimeout(timer);
  }, [timerCount, dispatch]);

  return (
    <p className="timer">{timerCount}</p>
  )
}

export default Timer;
