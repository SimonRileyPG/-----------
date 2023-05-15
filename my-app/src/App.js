import React from 'react'
import Profile from './Profile'
import { useState } from 'react';
function App() {
  const [buttonText, setButtonText] = useState('Click');
  function fear(){
    console.log("button clicked")
    setButtonText("clicked");
    
  }
  return (
    <div>
      <button onClick={fear}>{buttonText}</button>
      <Profile />
    </div>
  )
}

export default App
