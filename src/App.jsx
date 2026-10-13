import { useState } from 'react'
import './App.css'
import { MyTodos } from './components/MyTodos'
import { Login } from './components/Login'

function App() {
const [IsLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className='h-screen bg-indigo-950 text-indigo-50 min-h-screen relative'>
     <h2 className='flex items-center flex-col p3 font-bold text-3xl'>My todos</h2>
    {IsLoggedIn ?<MyTodos setIsLoggedIn={setIsLoggedIn}/>:<Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  )
}

export default App
