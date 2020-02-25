import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { addInsight } from 'redux/actions';
import { AppStore, Insight } from 'interfaces';
import mockInsights from 'data/mockInsights';
import './DisplayInsights.scss';
import down from 'assets/down.svg';

const DisplayInsights:React.FC = () => {
  const [ currentStep, setCurrentStep ] = useState<number>(0)
  const [ insights, setInsights ] = useState<Insight[]>(mockInsights)
  
  // const insights = useSelector((state: AppStore) => state.insights)

  const showNextInsight = ():void => {
    if (currentStep > 1) {
      setCurrentStep(0)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <section className='display-insights-section'>
      <div className='display-insights-header-div'>
        <h3>Insights</h3>
        <img src={down} alt='down-arrow'/>
      </div>
      <div className='display-insights-body-div'>
        <h2>{insights[currentStep].question}</h2>
        <li>{insights[currentStep].answers[0]}</li>
        <li>{insights[currentStep].answers[1]}</li>
        <li>{insights[currentStep].answers[2]}</li>
      </div>
      <button type='button' onClick={showNextInsight}>Next</button>
    </section>
  )
}

export default DisplayInsights;