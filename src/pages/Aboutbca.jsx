import React from 'react'
import Top_header from '../Components/Top_header/Top_header'
import Menubar from '../Components/Menubar/Menu_bar'
import Footer from '../Components/Footer/Footer'
import Ufooter from '../Components/UpperFooter/Ufooter'
import About from '../Components/About/About'
const Aboutbca = () => {
  return (
    <div>
      <Top_header/>
      <Menubar/>
      <About name='Shiwan'/>
      <Ufooter/>
      <Footer/>
    </div>
  )
}

export default Aboutbca