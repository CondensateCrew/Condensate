import React, { useState, MouseEvent, ChangeEvent, KeyboardEvent } from 'react';
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

  return (
    <main className='round-two-main'>
    <Header />
    <section className='round-two-section'>
      <div className='instructions-div-wrapper'>
        <div className='question-numbers-div'>
          <h2 id='one' className='question-number-h2 completed-round'>1</h2>
          <h2 id='two' className='question-number-h2 current-round'>2</h2>
          <h2 id='three' className='question-number-h2'>3</h2>
        </div>
      <Instruction/>
      </div>
      <section className='template-question-section-wrapper'>
        <TemplateQuestion />
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
      <Timer time={90}/>
    </footer>
    </main>
  )
}
