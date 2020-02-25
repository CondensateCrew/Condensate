import React, { useState, useEffect } from 'react';
import './SecretSauce.scss';
import down from '../../assets/down.svg';
import refresh from '../../assets/refresh.svg';
import mockRandomWords from 'data/mockRandomWords';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from 'interfaces';
import { addSecretSauce } from 'redux/actions';

const SecretSauce:React.FC = () => {
  const [ currentStep, setCurrentStep ] = useState<number>(0)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSecretSauce(mockRandomWords))
  }, [dispatch])

  const secretSauce  = useSelector((state:AppStore) => state.secretSauce)

  const refreshSecretSauce = ():void => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(0)
    }
  }

  return (
    <section className='secret-sauce-section'>
      <div className='secret-sauce-header-div'>
        <h3>Random Word</h3>
        <img src={down} alt='down-arrow'/>
      </div>
      <div className='secret-sauce-display-div'>
        <h2>{secretSauce[currentStep]}</h2>
        <img onClick={refreshSecretSauce} src={refresh} alt='refresh-recycle icon'/>
      </div>
    </section>
  )
}

export default SecretSauce;
