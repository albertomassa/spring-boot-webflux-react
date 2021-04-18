import React from 'react'

import People from './features/people/People'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    
        <People/>    
      </header>     
    </div>)}

export default App
