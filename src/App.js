import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
      <div className="content" style={{
        fontFamily: 'oldGrowth',
        fontWeight: 300,
        fontSize: '16px',
        margin: 0,
        padding: 0,
        background: '#e2ded5'
    }}>
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
