import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Hero />
      </Router>
    </div>
  )
}

export default App
