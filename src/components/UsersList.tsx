import React, { useEffect, useState } from 'react';
import { IUser } from '../dto/User.dto';
import { User } from './User';

import './UserList.scss';

export type selectFilter = false | 'city' | 'companyName'

interface UsersListProps {
  users: IUser[]
  selectFilter: selectFilter
  selectHandler(e: React.MouseEvent, user: IUser): void
}

export const UsersList: React.FC<UsersListProps> = ({users, selectFilter, selectHandler}) => {
  const [sorted, setSorted] = useState([] as IUser[]);
  const [userList, setUserList] = useState([] as React.ReactNode[]);

  const usersList = (sortedList: IUser[]) => sortedList.map((user: IUser) => {
    return <li key={user.id}><User user={user} selectHandler={selectHandler}/></li>
  })

  const sortHandler = (selectFilter: selectFilter, users: IUser[]): IUser[] => {
    if (selectFilter) {
      if (selectFilter === 'city') {
        return users.sort(((a, b) => {
          if (a.address.city < b.address.city) {
            return -1;
          }
          if (a.address.city > b.address.city) {
            return 1;
          }
          if (a.address.city === b.address.city) {
            return 0;
          }
          return 0 ;
        }))
      }
      if (selectFilter === 'companyName') {
          return users.sort(((a, b) => {
            if (a.company.name < b.company.name) {
              return 1;
            }
            if (a.company.name > b.company.name) {
              return -1;
            }
            if (a.company.name === b.company.name) {
              return 0;
            }
            return 0;
          }))
      }
    }
    return users;
  }

  useEffect(() => {
      setSorted(sortHandler(selectFilter, users))
  }, [sorted, selectFilter])

  useEffect(() => {
    setUserList(usersList(sorted))
  }, [sorted])

  return(
    <div className="UsersList">
      <h1 className="users-list-title">Список пользователей</h1>
      <ul className="users-list-list">
        {userList}
      </ul>
    </div>
  )
}
