import React, { useState } from 'react';
import { useSelector } from 'react-redux';//eslint-disable-line
// import { addInsight } from 'redux/actions';
import { AppStore, Insight } from 'interfaces';//eslint-disable-line
import mockInsights from 'data/mockInsights';
import './DisplayInsights.scss';
import down from 'assets/down.svg';

const DisplayInsights:React.FC = () => {
  const [ currentStep, setCurrentStep ] = useState<number>(0)
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const [ insights, setInsights ] = useState<Insight[]>(mockInsights)//eslint-disable-line

  // const insights = useSelector((state: AppStore) => state.insights)

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
          <h2>{insights[currentStep].question}</h2>
          <li>{insights[currentStep].answers[0]}</li>
          <li>{insights[currentStep].answers[1]}</li>
          <li>{insights[currentStep].answers[2]}</li>
        </ul>
      }
      { isClicked &&
        <button type='button' onClick={showNextInsight}>Next</button>}
    </section>
  )
}

export default DisplayInsights;
