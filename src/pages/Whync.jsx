import React from 'react'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Menu_bar from '../Components/Menubar/Menu_bar'
import Top_header from '../Components/Top_header/Top_header'
import Ufooter from '../Components/UpperFooter/Ufooter'

const Whync = () => {
  return (
    <div>
      <Top_header/>
      <Menu_bar/>
      <About name='WHY NC'/>
      <Ufooter/>
      <Footer/>
      </div>
  )
}

export default Whync