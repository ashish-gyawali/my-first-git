import React from 'react'
import '../../../images/menu-logo.png'
import Styles from './Student.module.css';
const Student = () => {
  return (
    <>
    <div className={Styles.card}>
        <div className={Styles.circle}>
            <img src='../../../images/menu-logo.png' className='logo'></img>
        </div>
        <div className={Styles.content}>x
        <h2>Lorem</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Asperiores aspernatur ratione distinctio illum, suscipit
              corporis ipsa possimus quidem 
            sunt temporibus .</p>
    <a href="#"> Explore</a>
    </div>
    {/* <img src='#' className='product'></img> */}
    </div>
    <div className={Styles.card}>
        <div className={Styles.circle}>
            <img src='../../../images/menu-logo.png' className='logo'></img>
        </div>
        <div className={Styles.content}>x
        <h2>Lorem</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Asperiores aspernatur ratione distinctio illum, suscipit
              corporis ipsa possimus quidem 
            sunt temporibus .</p>
    <a href="#"> Explore</a>
    </div>
    {/* <img src='#' className='product'></img> */}
    </div>
    </>
  )
}

export default Student