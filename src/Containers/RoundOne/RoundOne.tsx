import './RoundOne.scss';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStore } from 'interfaces';
import Header from 'Components/Header/Header';
import GameBoard from 'Containers/GameBoard/GameBoard';
import ChosenWordTrain from 'Containers/ChosenWordTrain/ChosenWordTrain';
// import Timer from 'Components/Timer/Timer';

const RoundOne:React.FC = () => {
  const timeEnded = useSelector((state: AppStore) => state.timeEnded);
  
  return (
    <main className="round-one-board">
      { timeEnded && <Redirect to='/round-two' /> }
      <Header />
      <GameBoard />
      <footer>
        <ChosenWordTrain />
      </footer>
    </main>
  )
}

export default RoundOne;
