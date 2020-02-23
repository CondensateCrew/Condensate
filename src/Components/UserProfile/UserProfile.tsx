import React from 'react';
import AlanBird from '../../assets/avatar.jpg';
import menu from '../../assets/menu-dot.svg';
import './UserProfile.scss';
interface Props {
  firstName: string,
  lastName: string,
}
const UserProfile:React.FC<Props> = ({ firstName, lastName }) => {
  return (
    <div className='user-profile-div'>
      <img className='profile-pic' src={AlanBird} alt='user profile'/>
      <h2><span>{firstName}</span> <span>{lastName}</span></h2>
      <img className='menu-svg' src={menu} alt='menu-svg' />
    </div>
  )
}

export default UserProfile