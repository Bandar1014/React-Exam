
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  )
}

export default App
