import React from 'react';
import { useSelector } from 'react-redux';
import './ChosenWordTrain.scss';
import { AppStore } from 'interfaces';

const ChosenWordTrain: React.FC = () => {
  const { chosenWords } = useSelector((store: AppStore) => ({
    chosenWords: store.chosenWords
  }));

  const blocks = chosenWords.map((word: string) => (
    <p key={word}>{word}</p>
  ));

  return (
    <section className="chosen-train">{ blocks }</section>
  )
}

export default ChosenWordTrain;
