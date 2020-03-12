import './UserProfile.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore, ILogoutUserAction } from 'interfaces';
import AlanBird from '../../assets/avatar.jpg';
import menu from '../../assets/menu-dot.svg';
import close from '../../assets/close.svg';
import logout from '../../assets/logout.svg';
import { logOutUser } from 'redux/actions';
import { useDispatch } from 'react-redux';

const UserProfile:React.FC = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state:AppStore) => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName
  }));

  const [ isClicked, setIsClicked ] = useState<boolean>(false);

  const toggleMenu = (): void => setIsClicked(!isClicked);
  const logoutUser = (): ILogoutUserAction => dispatch(logOutUser());

  return (
    <div className='user-profile-div'>
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
