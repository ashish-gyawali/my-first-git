import React from 'react'
import About from '../Components/About/About'
import Top_header from '../Components/Top_header/Top_header'
import Menu_bar from '../Components/Menubar/Menu_bar'

const Noticeboard = () => {
  return (
    <div>
      <Top_header/>
      <Menu_bar/>
      <About name='NOTICEBOARD'/>
      
      </div>
  )
}

export default Noticeboard