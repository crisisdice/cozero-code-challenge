import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import './styles/index.css'
import './styles/table.css'
import './styles/search.css'
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
