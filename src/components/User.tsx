import React from 'react';
import { NavLink } from 'react-router-dom';
import { IUser } from '../dto/User.dto';
import './User.scss';

interface UserProps {
  user: IUser
  selectHandler: (e :React.MouseEvent, user: IUser) => void
}

export const User: React.FC<UserProps> = ({user, selectHandler}) => {
  return(
    <div className='User'>
      <div className="userData">
        <p className="name"><span className="field-title">ФИО: </span>{user.name}</p>
        <p className="city"><span className="field-title">город: </span>{user.address.city}</p>
        <p className="company"><span className="field-title">компания: </span>{user.company.name}</p>
      </div>
      <NavLink to="/profile" onClick={(e) => selectHandler(e, user)} className="more">Подробнее</NavLink>
    </div>
  )
}
