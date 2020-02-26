import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addChosenWord, removeAllWords } from 'redux/actions';

interface Props {
  chosenWords: string[]
}

const BubblesReducer: React.FC<Props> = ({ chosenWords }) => {
  const dispatch = useDispatch();
  const [ isRedirected, setIsRedirected ] = useState<boolean>(false);
  const [ isDisabled, setIsDisabled ] = useState<boolean>(false);
  const [ count, setCount ] = useState<number>(0);
  const [ bubbles, setBubbles ] = useState<string[]>([]);
  const [ reducedBubbles, setReducedBubbles ] = useState<string[]>([]);

  useEffect(() => {
    setBubbles(chosenWords.slice(count, count + 3));
    setIsDisabled(false);
  }, [ chosenWords, count ]);

  const goToNextTriple = (event: React.MouseEvent):void => {
    const currentTarget = event.target as HTMLElement;
    updateElements(currentTarget);
    setIsDisabled(true);
    setTimeout(() => {
      setReducedBubbles([...reducedBubbles, currentTarget.id]);
      setCount(count + 3);
    }, 1500);
  };

  useEffect(() => {
    if (reducedBubbles.length === 3) {
      dispatch(removeAllWords());
      reducedBubbles.map((bbl: string) => dispatch(addChosenWord(bbl)));
      setIsRedirected(true);
    }
  }, [reducedBubbles, dispatch]);

  const bubbleEls: JSX.Element[] = bubbles.map((bubble: string, i: number) => (
    <p
      key={`${bubble}-${i + 1}`}
      className="bubble">
      <span></span>
      <button id={bubble.toLowerCase()} onClick={goToNextTriple} disabled={isDisabled}>{bubble}</button>
    </p>
  ));

  return (
    <section className="limited-bbls">
      <h3>Choose one</h3>
      <section>
        {!isRedirected
          ? bubbleEls
          : <Redirect to='/instructions/second-rd' />
        }
      </section>
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

export default BubblesReducer;
