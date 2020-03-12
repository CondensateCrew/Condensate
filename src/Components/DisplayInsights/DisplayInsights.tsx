import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore, Insight } from 'interfaces';
import './DisplayInsights.scss';
import down from 'assets/down.svg';

const DisplayInsights:React.FC = () => {
  const [ currentStep, setCurrentStep ] = useState<number>(0);
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const insights: Insight[] = useSelector((store: AppStore) => store.insights);
  const insightAnswers: string[] = insights[currentStep].answers;

  const responses: JSX.Element[] = insightAnswers.map((answer:string, index: number) => (
    <li key={index}>{answer}</li>
  ));

  const showNextInsight = ():void => {
    return (currentStep > 1)
      ? setCurrentStep(0)
      : setCurrentStep(currentStep + 1);
  };

  const toggleBlock = ():void => setIsClicked(!isClicked);
  const upClass: string = (isClicked) ? 'up-btn' : '';

  return (
    <section className='display-insights-section'>
      <header>
        <h3>Insights</h3>
        <button onClick={toggleBlock}>
          <img src={down} alt='down-arrow' className={upClass} />
        </button>
      </header>
      { isClicked &&
        <ul className='display-insights-body-div'>
          <h2>{insights[currentStep].question.sentence}</h2>
          {responses}
        </ul>
      }
      { isClicked &&
        <button type='button' onClick={showNextInsight}>Next</button>}
    </section>
  );
}

export default DisplayInsights;
