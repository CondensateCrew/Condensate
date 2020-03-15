import React from 'react';
import './IdeaEventHorizon.scss';
import Header from 'Components/Header/Header';
import FinalIdeaField from 'Containers/FinalIdeaField/FinalIdeaField';
import SecretSauce from 'Components/SecretSauce/SecretSauce';
import DisplayInsights from 'Containers/DisplayInsights/DisplayInsights';

const IdeaEventHorizon:React.FC = () => {
  return (
    <main>
      <Header />
      <section className='idea-event-horizon-section'>
        <FinalIdeaField />
        <aside>
          <SecretSauce />
          <DisplayInsights />
        </aside>
      </section>
    </main>
  );
}

export default IdeaEventHorizon;
