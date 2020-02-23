import './RoundOne.scss';
import React from 'react';
import Header from 'Components/Header/Header';
import GameBoard from 'Containers/GameBoard/GameBoard';
import ChosenWordTrain from 'Containers/ChosenWordTrain/ChosenWordTrain';
import Timer from 'Components/Timer/Timer';

const RoundOne:React.FC = () => {
  return (
    <main className="round-one-board">
      <Header />
      <GameBoard />
      <footer>
        <ChosenWordTrain />
        <Timer time={90} />
      </footer>
    </main>
  )
}

export default RoundOne;
