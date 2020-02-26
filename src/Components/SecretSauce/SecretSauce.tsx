import React, { useState, useEffect } from 'react';
import './SecretSauce.scss';
import down from '../../assets/down.svg';
import refresh from '../../assets/refresh.svg';
import mockRandomWords from 'data/mockRandomWords';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from 'interfaces';
import { addSecretSauce } from 'redux/actions';

const SecretSauce:React.FC = () => {
  const [ currentStep, setCurrentStep ] = useState<number>(0);
  const [ isClicked, setIsClicked ] = useState<boolean>(false);

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

  const toggleBlock = () => setIsClicked(!isClicked);
  const upClass = (isClicked) ? 'up-btn' : '';

  return (
    <section className='secret-sauce-section'>
      <header className='secret-sauce-header-div'>
        <h3>Random Word</h3>
        <button onClick={toggleBlock}>
          <img src={down} alt='down-arrow' className={upClass} />
        </button>
      </header>
      { isClicked &&
        <main className='secret-sauce-display-div'>
          <h2>{secretSauce[currentStep]}</h2>
          <img onClick={refreshSecretSauce} src={refresh} alt='refresh-recycle icon'/>
        </main>
      }
    </section>
  )
}

export default SecretSauce;
