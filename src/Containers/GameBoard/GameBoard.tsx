import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './GameBoard.scss';
import { AppStore } from 'interfaces';
import collection from './mockData';
import { addChosenWord } from 'redux/actions';
import { Redirect } from 'react-router-dom';

const GameBoard: React.FC = () => {
  const dispatch = useDispatch();
  let randomWords: string[] = Object.keys(collection);
  const firstStack = randomWords.splice(0, 8);
  const [ isRedirected, setIsRedirected ] = useState<boolean>(false)
  const [ bubbles, setBubbles ] = useState<string[]>(firstStack);
  const { chosenWords, timeEnded } = useSelector((store: AppStore) => ({
    chosenWords: store.chosenWords,
    timeEnded: store.timeEnded,
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setBubbles(randomWords.splice(0, 8));
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if( chosenWords.length === 9 || timeEnded ) setIsRedirected(true);
  }, [ chosenWords, timeEnded ])

  const sendToChosen = (event: React.MouseEvent) => {
    const currentTarget = event.target as HTMLElement;
    updateElements(currentTarget);
    if (!chosenWords.includes(currentTarget.id)) {
      dispatch(addChosenWord(currentTarget.id));
    }
  }

  const bubbleEls = bubbles.map((bubble: string, i: number) => (
    <p
      key={`${bubble}-${i + 1}`}
      className="bubble">
      <div></div>
      <span id={bubble.toLowerCase()} onClick={sendToChosen}>{bubble}</span>
    </p>
  ));

  return (
    <main className="game-board">
      { isRedirected
        ? <Redirect to='/round-two' />
        : bubbleEls
      }
    </main>
  )
}

export const updateElements = (currentTarget: HTMLElement): void => {
  const parent = currentTarget.parentNode as HTMLElement;
  const sibling = currentTarget.previousSibling as HTMLElement;
  parent.classList.add('disappeared');
  sibling.classList.add('bubble-rounds');
  currentTarget.style.animation = 'disappearing 10s';
}

export default GameBoard;
