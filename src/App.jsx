import { useState } from 'react'
import './App.css'

import PlayGround from './components/PlayGround'



function App() {

  const [ userName , setUserName] = useState('Jose');

  return (
    <PlayGround 
      userName = { userName }
    />
  )
}

export default App
