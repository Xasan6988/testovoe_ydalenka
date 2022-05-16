import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Profile } from './components/Profile';
import { Sidebar } from './components/Sidebar';
import { Users } from './components/Users';
import { selectFilter, UsersList } from './components/UsersList';
import { IUser } from './dto/User.dto';

const App: React.FC = () => {
  const [selectUser, setSelectUser] = useState({
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Ростов",
    zipcode: "92998-3874",
    geo: {
    lat: "-37.3159",
    lng: "81.1496"
    }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
    }
    } as IUser);

    const [filter, setFilter] = useState(false as selectFilter)

  const clickSelectHandler = (e: React.MouseEvent, user: IUser): void => {
    console.log('click', e)
    setSelectUser(user);
  }

  const selectFilterHandler = (e: React.MouseEvent, selectFilter: selectFilter): void => {
    setFilter(selectFilter)
  }

  return (
    <div className="App">
      <Sidebar selectFilterHandler={selectFilterHandler}/>
      <Users>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <UsersList
                selectHandler={clickSelectHandler}
                users={[selectUser, {...selectUser, id: 2, address: {...selectUser.address, city: 'Ямал'}}, {...selectUser, id: 3, address: {...selectUser.address, city: 'Астрахань'}}]}
                selectFilter={filter}/>}/>
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
