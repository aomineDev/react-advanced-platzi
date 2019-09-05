import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'

import { Context } from './Context'

import { Navbar } from './layout/Navbar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyles />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        {!isAuth && <Redirect from='/favs' to='login' noThrow />}
        <Favs path='/favs' />
        {!isAuth && <Redirect from='/user' to='login' noThrow />}
        <User path='user' />
        <NotFound default />
      </Router>
      <Navbar />
    </>
  )
}
