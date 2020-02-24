import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from 'interfaces';
import { Redirect } from 'react-router-dom';
import collection from './mockData';
import { addChosenWord } from 'redux/actions';

const BubblesAll: React.FC = () => {
  const dispatch = useDispatch();
  let randomWords: string[] = Object.keys(collection);
  const firstStack = randomWords.splice(0, 8);
  const timeEnded = useSelector((store: AppStore) => store.timeEnded);

  const [ bubbles, setBubbles ] = useState<string[]>(firstStack);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBubbles(randomWords.splice(0, 8));
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

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
        : <Redirect to='/round-two' />
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