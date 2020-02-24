import React from 'react';
import './DisplayInsights.scss';
import down from 'assets/down.svg';

const DisplayInsights:React.FC = () => {
  return (
    <section className='display-insights-section'>
      <div className='display-insights-header-div'>
        <h3>Insights</h3>
        <img src={down} alt='down-arrow'/>
      </div>
      <div className='display-insights-body-div'>
        <h2>Some shit question...?</h2>
        <li>Bears</li>
        <li>Beers</li>
        <li>Balalaika</li>
      </div>
      <button>Next</button>
    </section>
  )
}

export default DisplayInsights;