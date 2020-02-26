import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore, WordSample } from 'interfaces';
import { Redirect } from 'react-router-dom';
// import collection from './mockData';
import { addChosenWord } from 'redux/actions';

const BubblesAll: React.FC = () => {
  const dispatch = useDispatch();
  const { timeEnded, randomWordCollections } = useSelector((store: AppStore) => ({
    timeEnded: store.timeEnded,
    randomWordCollections: store.randomWordCollections
  }));

  let randomWords = randomWordCollections.map((word: WordSample) => word.word)
  const firstStack = randomWords.splice(0, 8);

  const [ bubbles, setBubbles ] = useState<string[]>(firstStack);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBubbles(randomWords.splice(0, 8));
    }, 8000);

    return () => clearTimeout(timer);
  }, []); //eslint-disable-line

  const sendToChosen = (event: React.MouseEvent) => {
    const currentTarget = event.target as HTMLElement;
    updateElements(currentTarget);
    dispatch(addChosenWord(currentTarget.id));
  }

  const bubbleEls = bubbles.map((bubble: string, i: number) => (
    <p
      key={`${bubble}-${i + 1}`}
      className="bubble randomly">
      <span></span>
      <button id={bubble.toLowerCase()} onClick={sendToChosen}>{bubble}</button>
    </p>
  ));

  return (
    <section className="all-bbls">
      { !timeEnded
        ? bubbleEls
        : <Redirect to='/instructions/second-rd' />
      }
    </section>
  )
}

export const updateElements = (currentTarget: HTMLElement): void => {
  const parent = currentTarget.parentNode as HTMLElement;
  const sibling = currentTarget.previousSibling as HTMLElement;
  parent.classList.add('disappeared');
  sibling.classList.add('bubble-rounds');
  currentTarget.style.animation = 'disappearing 10s';
}

export default BubblesAll;
