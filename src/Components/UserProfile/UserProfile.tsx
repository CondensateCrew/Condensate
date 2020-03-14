import './UserProfile.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { cleanStore } from 'redux/actions';
import { AppStore } from 'interfaces';
import AlanBird from '../../assets/avatar.jpg';
import menu from '../../assets/menu-dot.svg';
import close from '../../assets/close.svg';
import logout from '../../assets/logout.svg';

const UserProfile:React.FC = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state:AppStore) => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName
  }));
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const [ isRedirected, setRedirected ] = useState<boolean>(false);
  const [ cookies, setCookie, removeCookie ] = useCookies(['token', 'name']); //eslint-disable-line

  const toggleMenu = (): void => setIsClicked(!isClicked);

  const logoutUser = () => {
    dispatch(cleanStore());
    removeCookie('name');
    removeCookie('token');
    setRedirected(true);
  };

  return (
    <div className='user-profile-div'>
      { isRedirected && <Redirect to='/' /> }
      <img className='profile-pic' src={AlanBird} alt='user profile'/>
      <h2>{`${firstName || 'Alan'} ${lastName || 'Birds'}`}</h2>
      {!isClicked
        ? <img className='menu-svg' src={menu} alt='menu-svg' onClick={toggleMenu} />
        : <section>
          <img className='logout' src={logout} alt='logout' onClick={logoutUser}/>
          <img className='close' src={close} alt='close' onClick={toggleMenu} />
        </section>
      }
    </div>
  );
}

export default UserProfile;
