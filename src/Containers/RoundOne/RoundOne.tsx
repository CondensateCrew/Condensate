import './RoundOne.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from 'interfaces';
import Header from 'Components/Header/Header';
import GameBoard from 'Containers/GameBoard/GameBoard';
import ChosenWordTrain from 'Containers/ChosenWordTrain/ChosenWordTrain';
import Timer from 'Components/Timer/Timer';

const RoundOne:React.FC = () => {
  const timeEnded = useSelector((store: AppStore) => store.timeEnded);

  return (
    <main className="round-one-board">
      <Header />
      <GameBoard />
      { !timeEnded &&
        <footer>
          <ChosenWordTrain />
          <Timer time={60} />
        </footer>
      }
    </main>
  );
}

export default RoundOne;
