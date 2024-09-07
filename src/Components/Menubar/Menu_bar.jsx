import React from 'react'
import styles from './Menu_bar.module.css'
import '../../../images/menu-Logo.png'
import { NavLink } from 'react-router-dom'
const Menu_bar = () => {
    return (
        <div className={styles.menu_bar}>
            <div className={styles.logo}>
                <img src="../../../images/menu-Logo.png" alt="" />
            </div>
            <div className={styles.menu_contents}>
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li>
                <NavLink to="/about-us">About us</NavLink>
                    <ul className={styles.about}>
                            <li>Message from chairman</li>
                            <li>Our Team</li>
                            <li>Faculty Member</li>
                        </ul>
                    </li>
                <li>
                <NavLink to="/about-bsccsit">About Bsccsit</NavLink>
                        <ul className={styles.csit}>
                            <li>Eligiblity Criteria</li>
                            <li>Bsccsit Syallbus</li>
                            <li>Internship and jobs</li>
                        </ul>
                </li>
                <li>
                <NavLink to="/about-bca">About bca</NavLink>
                        <ul className={styles.bca}>
                            <li>Eligiblity Criteria</li>
                            <li>Bsccsit Syallbus</li>
                            <li>Internship and jobs</li>
                        </ul>
                </li>
                <li><NavLink to="/why-nc">Why Nc</NavLink></li>
                <li><NavLink to="/notice-board">Noticeboard</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu_bar