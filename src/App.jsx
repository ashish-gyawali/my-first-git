import React from 'react'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Aboutbsccsit from './pages/Aboutbsccsit'
import Aboutbca from './pages/Aboutbca'
import Whync from './pages/Whync'
import Noticeboard from './pages/Noticeboard'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/about-us' element={<Aboutus/>}/>
    <Route path='/About-bsccsit' element={<Aboutbsccsit/>}/>
    <Route path='/about-bca' element={<Aboutbca/>}/>
    <Route path='/why-nc' element={<Whync/>}/>
    <Route path='/notice-board' element={<Noticeboard/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App