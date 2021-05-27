import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles'
import Hero from './components/Hero'
import Products from './components/Products'
import { productsData } from './components/Products/data'

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading="Choose Your Favourite" data={productsData} />
      </Router>
    </div>
  )
}

export default App
