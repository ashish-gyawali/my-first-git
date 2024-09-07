import React from 'react'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Menu_bar from '../Components/Menubar/Menu_bar'
import Top_header from '../Components/Top_header/Top_header'
import Ufooter from '../Components/UpperFooter/Ufooter'

const Gallery = () => {
  return (
    <div>
      <Top_header/>
      <Menu_bar/>
      <About name='GALLERY'/>
      <div className="container">
			<div className="Gallery_part">
        <div className="row">
          <div className="col-lg-12">
		<ul>
		<center><li><h1>School Album</h1></li></center>
		 <li><a href="../../../images/menu-logo.png" rel="images" className="fancy" title="images">
		<img src="../../../images/menu-logo.png" alt="bal1.jpg"/>
		</a></li>
		 <li><a href="../../../images/menu-logo.png" rel="images" className="fancy" title="images">
		<img src="../../../images/menu-logo.png" alt="bal2.jpg"/>
	    </a></li>
		 <li><a href="../../../images/menu-logo.png" rel="images" className="fancy" title="images">
		<img src="../../../images/menu-logo.png" alt="fuc.jpg"/>
	   </a> </li>
		 <li><a href="../../../images/menu-logo.png" rel="images" className="fancy" title="images">
		<img src="../../../images/menu-logo.png" alt="lll.jpg"/>
	    </a></li>
      <li><a href="../../../images/menu-logo.png" rel="images" className="fancy" title="images">
      <img src="../../../images/menu-logo.png" alt="b2"/>
        </a></li>
      <li><a href="../../../images/menu-logo.png" rel="images" className="fancy" title="images">
      <img src="../../../images/menu-logo.png" alt="d"/>
        </a></li>
      <li><a href="../../../images/menu-logo.png" rel="images" className="fancy" title="image 8">
      <img src="../../../images/menu-logo.png" alt="e"/>
        </a></li>
	</ul>
     </div>
     </div>
   </div>
 </div>
      <Ufooter/>
      <Footer/>
      </div>
  )
}

export default Gallery