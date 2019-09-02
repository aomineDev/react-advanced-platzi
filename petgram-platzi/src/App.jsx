import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'

import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Home path='/' />
      <Home path='/pet/:categoryId' />
    </Router>
  </>
)
