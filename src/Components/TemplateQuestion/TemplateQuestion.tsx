import React from 'react';
import './TemplateQuestion.scss';

interface Props {
  templateQuestion: string
}

const TemplateQuestion:React.FC<Props> = ({ templateQuestion }) => {
  return (
    <h3 className='template-question-h3'>{templateQuestion}</h3>
  )
}

export default TemplateQuestion;