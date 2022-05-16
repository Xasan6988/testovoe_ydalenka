import React from 'react';
import { NavLink } from 'react-router-dom';
import { IUser } from '../dto/User.dto';

interface UserProps {
  user: IUser
  selectHandler: (e :React.MouseEvent, user: IUser) => void
}

export const User: React.FC<UserProps> = ({user, selectHandler}) => {
  return(
    <div className='User'>
      <div className="userData">
        <p className="name">{user.name}</p>
        <p className="city">{user.address.city}</p>
        <p className="company">{user.company.name}</p>
      </div>
      <NavLink to="/profile" onClick={(e) => selectHandler(e, user)} className="more">Подробнее</NavLink>
    </div>
  )
}
