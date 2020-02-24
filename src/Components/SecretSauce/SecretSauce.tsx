import React from 'react';
import './SecretSauce.scss';
import down from '../../assets/down.svg';
import refresh from '../../assets/refresh.svg';

const SecretSauce:React.FC = () => {
  return (
    <section className='secret-sauce-section'>
      <div className='secret-sauce-header-div'>
        <h3>Random Word</h3>
        <img src={down} alt='down-arrow'/>
      </div>
      <div className='secret-sauce-display-div'>
        <h2>Goose</h2>
        <img src={refresh} alt='refresh-recycle icon'/>
      </div>
    </section>
  )
}

export default SecretSauce;
