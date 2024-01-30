import './App.css'

import { UserProvider } from './contexts/UserContext';

import PlayGround from './components/PlayGround'
import Login from './components/Login/Login';



function App() {

  return (

    <UserProvider>
      <div className='relative bg-dots-pattern overflow-hidden w-full min-h-lvh'>
        <Login />
        <PlayGround />

        <div className='bg-circle bg-circle__blue -top-[25rem] -left-[25rem] w-[50rem]'></div>
        <div className='bg-circle bg-circle__green top-[10rem] left-[10rem] w-[20rem] '></div>
        <div className='bg-circle bg-circle__blue top-[25rem] -right-[25rem] w-[50rem]'></div>
        <div className='bg-circle bg-circle__green top-[10rem] right-[10rem] w-[20rem]'></div>
      </div>
    </UserProvider>

  )
}

export default App
