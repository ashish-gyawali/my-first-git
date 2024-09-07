import React from 'react'
import tstyle from './Top_header.module.css'
import{TbBrandFacebook} from 'react-icons/tb'
import{FaGooglePlusG}from'react-icons/fa'
import{FiTwitter}from'react-icons/fi'
import{AiOutlineLinkedin} from 'react-icons/ai'
import{AiOutlineYoutube} from 'react-icons/ai'
import{ImLocation} from 'react-icons/im'
import{FiPhoneCall} from 'react-icons/fi'
import{BsFillPhoneFill} from 'react-icons/bs'
import{AiOutlineMail} from 'react-icons/ai'
const Top_header = () => {
  return (
    <div className={tstyle.top_header}>
      <ul className={tstyle.top_header_contacts}>
        <li><ImLocation size="14px" className={tstyle.contact_icon}/>
        Ganeshman Chwok</li>
        <li><FiPhoneCall size="14px" className={tstyle.contact_icon}/>
        +977-81-522883</li>
        <li><BsFillPhoneFill size="14px" className={tstyle.contact_icon}/>
        9840051763 / 9858025883</li>
        <li><AiOutlineMail size="16px" className={tstyle.contact_icon}/>
        <a href='mailto:info@nepalgunjcollege.edu.np'> info@nepalgunjcollege.edu.np</a></li>
      </ul>
      <div className={tstyle.top_header_icons}>
      <a href="https://www.google.com/" target="_blank"><TbBrandFacebook size="25px"/></a>
      <a href="https://www.google.com/" target="_blank"><FaGooglePlusG size="25px"/></a>
      <a href="https://www.twitter.com/" target="_blank"><FiTwitter size="25px"/></a>
      <a href="https://www.linkedin.com/" target="_blank"><AiOutlineLinkedin size="25px"/></a>
      <a href="https://www.youtube.com/" target="_blank"><AiOutlineYoutube size="25px"/></a>
      </div>
    </div>
  )
}

export default Top_header