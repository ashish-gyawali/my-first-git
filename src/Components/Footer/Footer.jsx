import React from 'react'
import Styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={Styles.footer}>
                <ul className={Styles.contact_us}>
                    <h1>Contact-us</h1>
                    <li>Nepalgunj College</li>
                    <li>Ganeshman Chowk</li>
                    <li>Nepalgunj,Nepal</li>
                    <li>+977-81-522883</li>
                    <li>9840051763 / 9858025883</li>
                    <li>info@nepalgunjcollege.edu.np</li>
                </ul>
            
            
                <ul className={Styles.quick_link}>
                    <h1>Quick Link</h1>
                    <li>Home</li>
                    <li>About  Us</li>
                    <li>Services</li>
                    <li>News & Events</li>
                    <li>Contact</li>
                </ul>
                <ul className={Styles.latest_news}>
                    <h1>Latest News</h1>
                    <li>Bsc.Csit Entrance Preparation Class Will Start</li>
                    <li>Nepalgunj College Official New Website Launched</li> 
                </ul>
        

    </div>
  )
}

export default Footer