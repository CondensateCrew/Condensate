import './WelcomePage.scss';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from 'Components/LoginForm/LoginForm';
import SignUpForm from 'Components/SignUpForm/SignUpForm';
import LoadingImage from 'Components/LoadingImage/LoadingImage';
import { getSetUp, getDashboard } from 'apiCalls/apiCalls';
import { addUser, addWordSamples, addAllActions, addAllBrainstorms, addAllCategories, addSecretSauce } from 'redux/actions';
import { WordSample } from 'interfaces';

const WelcomePage: React.FC = () => {
  const [ isLoaded, setIsLoaded ] = useState<boolean>(false);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isLogin, setIsLogin ] = useState<boolean>(true);
  const [ token, setToken ] = useState<string>('');
  const [ name, setName ] = useState<string>('');
  const [ error, setError ] = useState<string>('');
  const [ cookies, setCookie ] = useCookies(['token', 'name']);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.token) setToken(cookies.token);
    if (cookies.name) setName(cookies.name);
  }, [ cookies ]);

  useEffect(() => {
    if (name !== '' && token !== '') {
      const nameParts: string[] = name.split('-');
      dispatch(addUser({
        id: token,
        firstName: nameParts[0],
        lastName: nameParts[1]
      }));
    }
  }, [ dispatch, name, token ]);

  const fetchGameStuff = async (token: string) => {
    try {
      const setUpRes = await getSetUp(token);
      dispatch(addWordSamples(setUpRes));
      const { actions, categories, brainstorms } = await getDashboard(token);
      dispatch(addAllActions(actions));
      dispatch(addAllCategories(categories));
      dispatch(addAllBrainstorms(brainstorms));
      const secretSauce = await setUpRes
        .map((word: WordSample): string => word.word);
      dispatch(addSecretSauce(secretSauce));
      setIsLoaded(true);
    }
    catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (token !== '') fetchGameStuff(token);
  }, [ token ]); //eslint-disable-line

  const formSelected: JSX.Element = (isLogin)
    ? <LoginForm
      {...{isLogin, error, setCookie, isLoading, setIsLoading}}
      toggleTab={setIsLogin}/>
    : <SignUpForm
      {...{isLogin, error, setCookie, isLoading, setIsLoading}}
      toggleTab={setIsLogin} />

  return (
    <main className="welcome-page">
      { isLoaded && <Redirect to='/dashboard' />}
      <aside>
        <h1>Condensate</h1>
        <h2>a new way <br /> to brainstorm</h2>
      </aside>
      { token !== '' ? <LoadingImage /> : formSelected }
    </main>
  );
}

export default WelcomePage;
