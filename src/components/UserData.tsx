import React, { useState } from 'react';
import { Alert } from './Alert';
import { Validate } from './Profile';

interface IUserData {
  name: string
  value: string
  edit: boolean
  change: (value: string) => void
  validate: (value: string) => Validate
}

export const UserData: React.FC<IUserData> = ({name, value, change, validate, edit}) => {
  const [alert, setAlert] = useState('');


  const validateHandler = (e: React.ChangeEvent<HTMLInputElement> ,value: string, validator: (value: string) => Validate) => {
    const validated = validator(value);
    if (validated.complete) {
      change(e.target.value);
    } else {
      setAlert(validated.message);
      setTimeout(() => {
        setAlert('');
      }, 3000)
    }

  }

  return(
    <>
      <h2 className="profile_main_list_item-title">{name}</h2>
      {alert && <Alert text={alert}/>}
      <input
        disabled={!edit}
        required
        className={alert && 'warn'}
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => change(e.target.value)}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => validateHandler(e, value, validate)}/>
    </>
  )
}
