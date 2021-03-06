import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore, WordSample } from 'interfaces';
import { Redirect } from 'react-router-dom';
import { addChosenWord, reverseInstructions, addForgottenWords } from 'redux/actions';

const BubblesAll: React.FC = () => {
  const dispatch = useDispatch();
  const { timeEnded, randomWordCollections } = useSelector((store: AppStore) => ({
    timeEnded: store.timeEnded,
    randomWordCollections: store.randomWordCollections
  }));

  let randomWords: string[] = randomWordCollections.map((word: WordSample) => word.word)
  const firstStack: string[] = randomWords.splice(0, 8);
  const [ bubbles, setBubbles ] = useState<string[]>(firstStack);
  
  useEffect(() => {
    dispatch(reverseInstructions());

    const timer = setInterval(() => {
      setBubbles(randomWords.splice(0, 8));
    }, 8000);

    return () => clearInterval(timer);
  }, []); //eslint-disable-line

  const sendToChosen = (event: React.MouseEvent): void => {
    const currentTarget = event.target as HTMLElement;
    updateElements(currentTarget);
    dispatch(addChosenWord(currentTarget.id));
  }

  const bubbleEls: JSX.Element[] = bubbles.map((bubble: string, i: number) => (
    <p
      key={`${bubble}-${i + 1}`}
      className="bubble randomly">
      <span></span>
      <button id={bubble.toLowerCase()} onClick={sendToChosen}>{bubble}</button>
    </p>
  ));

  const addWords = () => {
    setTimeout(() => {
      let num = Math.floor((Math.random() * 61));
      dispatch(addForgottenWords(randomWordCollections
        .slice(num, num + 3)
        .map((wordObj:WordSample) => wordObj.word)
        ))}, 2000);
    return <Redirect to='/instructions/second-rd' />
  };

  return (
    <section className="all-bbls">
      { !timeEnded
        ? bubbleEls
        : addWords()
      }
    </section>
  );
}

export const updateElements = (currentTarget: HTMLElement): void => {
  const parent = currentTarget.parentNode as HTMLElement;
  const sibling = currentTarget.previousSibling as HTMLElement;
  parent.classList.add('disappeared');
  sibling.classList.add('bubble-rounds');
  currentTarget.style.animation = 'disappearing 10s';
}

export default BubblesAll;
