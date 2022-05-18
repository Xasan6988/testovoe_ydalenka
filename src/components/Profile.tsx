import React, { useState } from 'react';
import { IUser } from '../dto/User.dto';
import { UserData } from './UserData';
import './Profile.scss';

export interface Validate {
  complete: boolean
  message: string
}

export const Profile: React.FC<Omit<IUser, 'company' | 'id'>> = ({name, username, email, address, zipcode, phone, website}) => {
  const [edit, setEdit] = useState(false);

  const [userFullName, setUserFullName] = useState(name);
  const [userName, setUserName] = useState(username);
  const [userEmail, setUserEmail] = useState(email);
  const [userStreet, setUserStreet] = useState(address.street);
  const [userCity, setUserCity] = useState(address.city);
  const [userZipcode, setUserZipcode] = useState(zipcode);
  const [userPhone, setUserPhone] = useState(phone);
  const [userWebsite, setUserWebsite] = useState(website)

  const stringValidator = (str: string): Validate => {
    if (str.length < 3 || str.length > 12) {
      return {
        complete: false,
        message: 'Минимальное количество символов - 3, максимальное - 12'
      }
    }
    return {
      complete: true,
      message: ''
    }
  }

  const sendFormHandler = async () => {
    const data = {
      userFullName,
      userName,
      userEmail,
      userStreet,
      userCity,
      userZipcode,
      userPhone
    }
    const sendData = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    if (sendData.status === 201) {
      console.log(sendData.status);
      console.log(data);
      setEdit(false);
    }
  }

  return (
    <div className="Profile">
      <header className="profile_header">
        <h1 className="profile_header_title">Профиль пользователя</h1>
        <button className="primary-btn profile-header-button" onClick={() => setEdit(true)}>Редактировать</button>
      </header>
      <main className="profile_main">
        <ul className="profile_main_list">
          <li className="profile_main_list_item">
            <UserData name={'Name'} value={userFullName} change={setUserFullName} validate={stringValidator} edit={edit}/>
          </li>
          <li className="profile_main_list_item">
            <UserData name={'User name'} value={userName} change={setUserName} validate={stringValidator} edit={edit}/>
          </li>
          <li className="profile_main_list_item">
            <UserData name={'E-mail'} value={userEmail} change={setUserEmail} validate={stringValidator} edit={edit}/>
          </li>
          <li className="profile_main_list_item">
            <UserData name={'Street'} value={userStreet} change={setUserStreet} validate={stringValidator} edit={edit}/>
          </li>
          <li className="profile_main_list_item">
            <UserData name={'City'} value={userCity} change={setUserCity} validate={stringValidator} edit={edit}/>
          </li>
          <li className="profile_main_list_item">
            <UserData name={'Zip code'} value={userZipcode} change={setUserZipcode} validate={stringValidator} edit={edit}/>
          </li>
          <li className="profile_main_list_item">
            <UserData name={'Phone'} value={String(userPhone)} change={setUserPhone} validate={stringValidator} edit={edit}/>
          </li>
          <li className="profile_main_list_item">
            <UserData name={'Website'} value={userWebsite} change={setUserWebsite} validate={stringValidator} edit={edit}/>
          </li>
        </ul>
      </main>
      <footer className="profile_footer">
        <button className="profile_footer_btn" disabled={!edit} onClick={sendFormHandler}>Отправить</button>
      </footer>
    </div>
  )
}
