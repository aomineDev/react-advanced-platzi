import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { Context } from './Context'

import { Navbar } from './layout/Navbar'
// import { Home } from './pages/Home'
// import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
// import { User } from './pages/User'
// import { Login } from './pages/Login'
// import { NotFound } from './pages/NotFound'

import { GlobalStyles } from './styles/GlobalStyles'

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const Login = React.lazy(() => import('./pages/Login'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <Login path='/login' />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        {!isAuth && <Redirect from='/favs' to='login' noThrow />}
        <Favs path='/favs' />
        {!isAuth && <Redirect from='/user' to='login' noThrow />}
        <User path='user' />
        <NotFound default />
      </Router>
      <Navbar />
    </Suspense>
  )
}
