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

        <div className='bg-circle bg-circle__blue -top-[15rem] -left-[15rem] w-[30rem] h-[30rem] sm:-top-[25rem] sm:-left-[25rem] sm:w-[50rem] sm:h-[50rem]'></div>
        <div className='bg-circle bg-circle__green top-[5rem] left-[5rem] w-[10rem] h-[10rem] sm:top-[10rem] sm:left-[10rem] sm:w-[20rem] sm:h-[20rem]'></div>
        <div className='bg-circle bg-circle__blue top-[15rem] -right-[15rem] w-[30rem] h-[30rem] sm:top-[25rem] sm:-right-[25rem] sm:w-[50rem] sm:h-[50rem]'></div>
        <div className='bg-circle bg-circle__green top-[25rem] right-[5rem] w-[10rem] h-[10rem] sm:top-[10rem] sm:right-[10rem] sm:w-[20rem] sm:h-[20rem]'></div>
      </div>
    </UserProvider>

  )
}

export default App
