import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Mytodos from './components/Mytodos'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AuthProvider from './AuthProvider'
import PrivateRoute from './PrivateRoute'
import Category from './components/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/todo' element={<PrivateRoute><Mytodos/></PrivateRoute>}/>
          <Route path='/category' element={<PrivateRoute><Category/></PrivateRoute>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
      
    </>
  )
}

export default App
