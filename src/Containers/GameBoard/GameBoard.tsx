import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './GameBoard.scss';
import { AppStore } from 'interfaces';
import { endTime } from 'redux/actions';
import BubblesAll from '../BubblesAll/BubblesAll';
import BubblesReducer from '../BubblesReducer/BubblesReducer';

const GameBoard: React.FC = () => {
  const dispatch = useDispatch();
  const chosenWords = useSelector((store: AppStore) => store.chosenWords);

  useEffect(() => {
    if( chosenWords.length === 9) {
      dispatch(endTime());
    }
  }, [ chosenWords ]);

  return (
    <main className="game-board">
      { !(chosenWords.length === 9)
        ? <BubblesAll />
        : <BubblesReducer chosenWords={chosenWords} />
      }
    </main>
  )
}

export default GameBoard;
