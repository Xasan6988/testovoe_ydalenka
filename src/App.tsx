import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Profile } from './components/Profile';
import { Sidebar } from './components/Sidebar';
import { Users } from './components/Users';
import { selectFilter, UsersList } from './components/UsersList';
import { IUser } from './dto/User.dto';
import './styles/normalize.css';
import './styles/App.scss';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  const [selectUser, setSelectUser] = useState({} as IUser);

  const [filter, setFilter] = useState(false as selectFilter);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([] as IUser[]);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await fetch('https://jsonplaceholder.typicode.com/users');

      if (data.status === 200) {
        let users = await data.json();
        setUsers(users);
        setTimeout(() => {setLoading(false);}, 2000)
      }
      else {
        throw new Error('Что то пошло не так при попытке получить пользователей')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const clickSelectHandler = (e: React.MouseEvent, user: IUser): void => {
    console.log('click', e)
    setSelectUser(user);
  }

  const selectFilterHandler = (e: React.MouseEvent, selectFilter: selectFilter): void => {
    setFilter(selectFilter)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <Sidebar selectFilterHandler={selectFilterHandler}/>
      <Users>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              (loading && <Loader/>) ||
              (!loading && <UsersList
                selectHandler={clickSelectHandler}
                users={users}
                selectFilter={filter}/>)}/>
          <Route
            path='profile'
            element={
              <Profile
                name={selectUser.name}
                username={selectUser.username}
                email={selectUser.email}
                address={selectUser.address}
                zipcode={selectUser.zipcode}
                phone={selectUser.phone}
                website={selectUser.website}
            />
            }/>
        </Routes>
      </BrowserRouter>
      </Users>
    </div>
  );
}

export default App;
