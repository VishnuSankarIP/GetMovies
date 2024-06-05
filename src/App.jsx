
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Favourites from './pages/Favourites'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/fav' element={<Favourites/>}></Route>
    </Routes>
    </>
  )
}

export default App
