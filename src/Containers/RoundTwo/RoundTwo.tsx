import React, { useState, useEffect, MouseEvent, ChangeEvent, KeyboardEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from 'interfaces';
import { useHistory } from 'react-router-dom';
import { addQuestionTemplates, reverseTime, addInsight } from 'redux/actions';
import mockQuestionTemplate from 'data/mockQuestionTemplate';
import TemplateQuestion from 'Components/TemplateQuestion/TemplateQuestion';
import GenerateInsights from 'Components/GenerateInsights/GenerateInsights';
import Header from 'Components/Header/Header';
import Timer from 'Components/Timer/Timer';
import Check from 'assets/check.svg';
import './RoundTwo.scss';

const RoundTwo:React.FC = () => {
  const [ inputValue, setInputValue ] = useState<string>('')
  const [ responses, setResponses ] = useState<string[]>([])
  const [ currentStep, setCurrentStep] = useState<number>(0)
  const [ time, setTime ] = useState<number>(90)//eslint-disable-line

  const dispatch = useDispatch();
  let history = useHistory();

  const { timeEnded, questionTemplates } = useSelector((state: AppStore) => ({
    timeEnded: state.timeEnded,
    questionTemplates: state.questionTemplates
  }))


  useEffect(() => {
    dispatch(addQuestionTemplates(mockQuestionTemplate))
    return () => {
    };
  }, [dispatch]);


  useEffect(() => {//eslint-disable-line

    if (timeEnded)  {
      if (currentStep >= 2) {
        history.push('/round-three')
      }

      dispatch(addInsight({
        id: currentStep,
        question: questionTemplates[currentStep],
        answers: responses
      }))
      setCurrentStep(currentStep + 1)
      setResponses([])
      dispatch(reverseTime())
    }
  },)



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      setResponses([inputValue, ...responses])
      setInputValue('')
    }
  }

  const handleSubmit = (e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>) => {
    if (inputValue === '') {
      return
    }
    setResponses([inputValue, ...responses])
    setInputValue('')
  }

  let insights = responses.map((insight:string, idx:number) => {
    return <GenerateInsights text={insight} responses={responses}
    key={idx} id={idx} setResponses={setResponses}/>
  })

  let displayRounds;
    if (currentStep === 0) {
      displayRounds = [
      <h2 key='one' id='one' className='question-number-h2 current-round'>1</h2>,
      <h2 key='two' id='two' className='question-number-h2'>2</h2>,
      <h2 key='three' id='three' className='question-number-h2'>3</h2>
      ]
    }
    if (currentStep === 1) {
      displayRounds = [
      <h2 key='one' id='one' className='question-number-h2 completed-round'>1</h2>,
      <h2 key='two' id='two' className='question-number-h2 current-round'>2</h2>,
      <h2 key='three' id='three' className='question-number-h2'>3</h2>
      ]
    }
    if (currentStep === 2) {
      displayRounds = [
      <h2 key='one' id='one' className='question-number-h2 completed-round'>1</h2>,
      <h2 key='two' id='two' className='question-number-h2 completed-round'>2</h2>,
      <h2 key='three' id='three' className='question-number-h2 current-round'>3</h2>
      ]
    }

  return (
    <main className='round-two-main'>
      <Header />
      <section className='template-question-section-wrapper'>
        <TemplateQuestion templateQuestion={questionTemplates[currentStep]}/>
        <section className='responses-section'>
          <div className='responses-input-div'>
            <input id='responses-input' onKeyDown={handleInputSubmit} onChange={handleChange}
            type='text' value={inputValue} autoComplete='off' placeholder='Write your question here...'></input>
            <img src={Check} onClick={handleSubmit} alt='submit-checkmark-icon' />
          </div>
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
