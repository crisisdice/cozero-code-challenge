import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import './index.css'
import { config } from './config'

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path={config.routes.home} element={<Home />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
