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

  return (
    <div className='user-profile-div'>
      <img className='profile-pic' src={AlanBird} alt='user profile'/>
      <h2><span>{firstName}</span> <span>{lastName}</span></h2>
      <img className='menu-svg' src={menu} alt='menu-svg' />
    </div>
  )
}

export default UserProfile