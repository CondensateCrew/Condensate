import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './IdeaEventHorizon.scss';
import Header from 'Components/Header/Header';
import FinalIdeaField from 'Components/FinalIdeaField/FinalIdeaField';
import SecretSauce from 'Components/SecretSauce/SecretSauce';

const IdeaEventHorizon:React.FC = () => {
  return (
    <main>
      <Header />
      <section className='idea-event-horizon-section'>
        <FinalIdeaField />
        <aside>
          <SecretSauce />
        </aside>
      </section>
    </main>
  )
}

export default IdeaEventHorizon;