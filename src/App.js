
import React from 'react';
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'

import RegisterUser from './pages/registrationform';
import UsersList from './pages/userslist';
import Login from './pages/loginform';

function App() {
  return (
    <div className="App">

      <header>
        <ul>
          <li>
            <NavLink to='/'>Registration</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          </ul>
      </header>

      <Routes>
        <Route element={<RegisterUser/>} path='/'/>
        <Route element={<UsersList/>} path='/users'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Navigate to={'/'}/>} path='*'/>
      </Routes>

    </div>
  );
  }

export default App;