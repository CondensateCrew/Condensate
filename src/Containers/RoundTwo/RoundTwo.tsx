import React, { useState, useEffect, MouseEvent, ChangeEvent, KeyboardEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore, WordSample } from 'interfaces';
import { useHistory } from 'react-router-dom';
import { reverseTime, addInsight } from 'redux/actions';
import TemplateQuestion from 'Components/TemplateQuestion/TemplateQuestion';
import GenerateInsights from 'Components/GenerateInsights/GenerateInsights';
import Header from 'Components/Header/Header';
import Timer from 'Components/Timer/Timer';
import Check from 'assets/check.svg';
import './RoundTwo.scss';

const RoundTwo:React.FC = () => {
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ responses, setResponses ] = useState<string[]>([]);
  const [ currentStep, setCurrentStep] = useState<number>(0);
  const [ time, setTime ] = useState<number>(5);//eslint-disable-line
  const dispatch = useDispatch();
  let history = useHistory();

  const { timeEnded, questionTemplates, chosenWords } = useSelector((store: AppStore) => ({
    timeEnded: store.timeEnded,
    questionTemplates: store.randomWordCollections,
    chosenWords: store.chosenWords
  }));

  let prompts = questionTemplates.filter((wordObj:WordSample) => { //eslint-disable-line
    let sentence = false;
    chosenWords.forEach((word:string) => {
      if (wordObj.word === word) {
        sentence = true
      }
    })
    if (sentence) {
      return wordObj
    }
  });

  useEffect(() => {//eslint-disable-line
    if (timeEnded)  {
      if (currentStep >= 2) {
        history.push('/round-three')
      }
      dispatch(addInsight({
        id: currentStep,
        question: prompts[currentStep],
        answers: responses
      }))
      setCurrentStep(currentStep + 1);
      setResponses([]);
      dispatch(reverseTime());
    }
  },)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  };

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      setResponses([inputValue, ...responses])
      setInputValue('')
    }
  };

  const handleSubmit = (e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>) => {
    if (inputValue === '') {
      return
    }
    setResponses([inputValue, ...responses])
    setInputValue('')
  };

  let insights = responses.map((insight:string, idx:number) => {
    return <GenerateInsights text={insight} responses={responses}
    key={idx} id={idx} setResponses={setResponses}/>
  });

  const displayRounds = ['1', '2', '3'].map((step: string, ind: number) => {
    const current = (currentStep === ind) ? 'current-round' : '';
    const addClass = (currentStep > ind) ? 'completed-round' : current;
    return <h2 key={ind} id={`step-${ind}`} className={`question-number-h2 ${addClass}`}>{step}</h2>
  });

  return (
    <main className='round-two-main'>
      <Header />
      <section className='template-question-section-wrapper'>
        <TemplateQuestion templateQuestion={prompts[currentStep].sentence}/>
        <section className='responses-section'>
          <header>
            <input id='responses-input' onKeyDown={handleInputSubmit} onChange={handleChange}
            type='text' value={inputValue} autoComplete='off' placeholder='Write your question here...' />
            <img src={Check} onClick={handleSubmit} alt='submit-checkmark-icon' />
          </header>
          <div className='responses-div'>
            {insights}
          </div>
        </section>
      </section>
      <footer>
        <div className='question-numbers-div'>
          {displayRounds}
        </div>
        {!timeEnded && <Timer time={time}/>}
      </footer>
    </main>
  )
}

export default RoundTwo;
