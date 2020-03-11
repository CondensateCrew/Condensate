import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from 'interfaces';
import './DisplayInsights.scss';
import down from 'assets/down.svg';

const DisplayInsights:React.FC = () => {
  const [ currentStep, setCurrentStep ] = useState<number>(0);
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const insights = useSelector((store: AppStore) => store.insights);

  const responses = insights[currentStep].answers.map((answer:string, index: number) => {
    return <li key={index}>{answer}</li>
  });

  const showNextInsight = ():void => {
    if (currentStep > 1) {
      setCurrentStep(0)
    } else {
      setCurrentStep(currentStep + 1)
    }
  };

  const toggleBlock = () => setIsClicked(!isClicked);
  const upClass = (isClicked) ? 'up-btn' : '';

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
  )
}

export default DisplayInsights;
