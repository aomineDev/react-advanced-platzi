import React from 'react'
import { Router } from '@reach/router'

import { Navbar } from './layout/Navbar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { GlobalStyles } from './styles/GlobalStyles'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
export const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Home path='/' />
      <Home path='/pet/:categoryId' />
      <Detail path='/detail/:detailId' />
    </Router>
    <UserLogged>
      {
        ({ isAuth }) => isAuth
          ? (
            <Router>
              <Favs path='/favs' />
              <User path='user' />
            </Router>
          )
          : (
            <Router>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='user' />
            </Router>
          )
      }
    </UserLogged>
    <Navbar />
  </>
)
