import React from 'react'
import './App.css'

function App() {
  const name = "react";

  return (
    <div className='app-header'>
      <h1 className='test'>Hello, {
        name === 'react' ? (<h1>YES</h1>) : null
      }!!</h1>
      <p>반갑습니다!</p>
    </div>
    
  )
}

export default App
