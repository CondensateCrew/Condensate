<<<<<<< HEAD
import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from 'interfaces';
import AlanBird from '../../assets/avatar.jpg';
import menu from '../../assets/menu-dot.svg';
import './UserProfile.scss';

const UserProfile:React.FC = () => {
  const { firstName, lastName } = useSelector((state:AppStore) => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName
  }))
=======
import './UserProfile.scss';
import React, { useState } from 'react';
import AlanBird from '../../assets/avatar.jpg';
import menu from '../../assets/menu-dot.svg';
import close from '../../assets/close.svg';
import logout from '../../assets/logout.svg';
import { logOutUser } from 'redux/actions';
import { useDispatch } from 'react-redux';

interface Props {
  firstName: string,
  lastName: string,
}

const UserProfile:React.FC<Props> = ({ firstName, lastName }) => {
  const dispatch = useDispatch();
  const [ isClicked, setIsClicked ] = useState<boolean>(false);

  const toggleMenu = (): void => setIsClicked(!isClicked);

  const logoutUser = () => dispatch(logOutUser());
>>>>>>> Refactor UserProfile code

  return (
    <div className='user-profile-div'>
      <img className='profile-pic' src={AlanBird} alt='user profile'/>
      <h2>{`${firstName} ${lastName}`}</h2>
      {!isClicked
        ? <img className='menu-svg' src={menu} alt='menu-svg' onClick={toggleMenu} />
        : <section>
          <img className='logout' src={logout} alt='logout' onClick={logoutUser}/>
          <img className='close' src={close} alt='close' onClick={toggleMenu} />
        </section>
      }
    </div>
  )
}

export default UserProfile
