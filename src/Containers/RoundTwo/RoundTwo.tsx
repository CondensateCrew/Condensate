import React, { useState, useEffect, MouseEvent, ChangeEvent, KeyboardEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from 'interfaces';
import { useHistory } from 'react-router-dom';
import { addQuestionTemplates, reverseTime } from 'redux/actions';
import mockQuestionTemplate from 'data/mockQuestionTemplate';
import Instruction from 'Components/Instruction/Instruction';
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
  const [ time, setTime ] = useState<number>(90)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addQuestionTemplates(mockQuestionTemplate))
    return () => {
    };
  }, []);
  let history = useHistory();


  useEffect(() => {
    if (timeEnded) {
      if (currentStep >= 2) {
        history.push('/gameboard/round-three')
      }
      setCurrentStep(currentStep + 1)
      dispatch(reverseTime())
    }
  })

  const { timeEnded, questionTemplates } = useSelector((state: AppStore) => ({
    timeEnded: state.timeEnded,
    questionTemplates: state.questionTemplates
  }))

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      setResponses([...responses, inputValue])
      setInputValue('')
    }
  }

  const handleSubmit = (e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>) => {
    setResponses([...responses, inputValue])
  }

  let insights = responses.map((insight:string) => {
    return <GenerateInsights text={insight} responses={responses} setResponses={setResponses}/>
  })

  let displayRounds;
    if (currentStep === 0) {
      displayRounds = [
      <h2 id='one' className='question-number-h2 current-round'>1</h2>,
      <h2 id='two' className='question-number-h2'>2</h2>,
      <h2 id='three' className='question-number-h2'>3</h2>
      ]
    } 
    if (currentStep === 1) {
      displayRounds = [
      <h2 id='one' className='question-number-h2 completed-round'>1</h2>,
      <h2 id='two' className='question-number-h2 current-round'>2</h2>,
      <h2 id='three' className='question-number-h2'>3</h2>
      ]
    }
    if (currentStep === 2) {
      displayRounds = [
      <h2 id='one' className='question-number-h2 completed-round'>1</h2>,
      <h2 id='two' className='question-number-h2 completed-round'>2</h2>,
      <h2 id='three' className='question-number-h2 current-round'>3</h2>
      ]
    }

  return (
    <main className='round-two-main'>
    <Header />
    <section className='round-two-section'>
      <div className='instructions-div-wrapper'>
        <div className='question-numbers-div'>
          {displayRounds}
        </div>
      <Instruction/>
      </div>
      <section className='template-question-section-wrapper'>
        <TemplateQuestion templateQuestion={questionTemplates[currentStep]}/>
        <div className='responses-div'>
          {insights}
          <div className='responses-input-div'>
            <input id='responses-input' onKeyDown={handleInputSubmit} onChange={handleChange}
            type='text' value={inputValue} placeholder='Write your question here...'></input>
            <img src={Check} onClick={handleSubmit} alt='submit-checkmark-icon' />
          </div>
        </div>
      </section>
    </section>
    <footer>
      {!timeEnded && <Timer time={time}/>}
    </footer>
    </main>
  )
}
