import React from 'react'
import Menu_bar from '../Components/Menubar/Menu_bar'
import Top_header from '../Components/Top_header/Top_header'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Ufooter from '../Components/UpperFooter/Ufooter'
const Aboutus = () => {
  return (
    <div>
      <Top_header/>
      <Menu_bar/>
      <About name='ABOUT US'/>
      <p className='des'>We take immense pride on being the first Information Technology (IT) College in Nepalgunj. 
        As a pioneer in the region, we fully understand our responsibility of laying a solid foundation for the IT education field
         across western Nepal. Since our mission is to guide our students to academic excellence, we are committed to delivering 
         top-class IT education that is recognized and respected nationally as well as internationally.<br/><br/>

In other cities there has been quantitative growth in IT education sector at the expense of quality, resulting in graduates 
who dont fit the needs of job markets. Happily, we pledge before all our future students that our courses would always be 
geared to suit the emerging need of the IT industry through constant interaction between our faculty members and the employers 
in the IT sector.</p>
<h1 className='vis'>Our Vision</h1>
<p className='the'>The institution aspires to be the premier education institution known for excellence in teaching, learning and research.</p>
<h1 className='mis'>Our Mission</h1>
      <p className='md'>The primary purpose of college is to provide a learning environment in which faculty, 
      staff and students can discover, examine critically, preserve and transmit the knowledge, wisdom and values 
      that will help ensure the survival of this and future generations and improve the quality of life for all.<br/><br/>

The institution strives to attract and serve students from diverse social, economic and ethnic backgrounds to creating 
a peaceful environment, within such an environment, each student, will be empowered and inspired to reach his or her full 
academic, emotional, physical and spiritual potential.<br/><br/>

The college is committed in encouraging, inspiring and helping students prepare for work, active citizenship,
 and successful life using a combination of classroom work and real time problem solving activities.</p>
      <h1 className='val'>Values</h1>
      <p className='vd'>We, the faculty and staff of the Nepalgunj College, commit to the following values:

<h4>Accountability:</h4> We will be accountable to our students and the general public forthe quality and quantity 
of our teaching, research, scholarship, and service to the community, and for theresponsible and effective use of our resources.<br/>

<h4>Leadership:</h4> We value and are committed to exercising leadership that aspires all the members of the college.<br/>

<h4>Excellence:</h4> We value excellence in teaching, service and research.<br/>

<h4>Social and Ethical Responsibility:</h4> We value honesty, fairness, respect, compassion, and professio
nal and scholarly ethics among faculty, staff and students.<br/>

<h4>Diversity: </h4>We value respect for cultural, individual and role dif
ference, including those due to age, gender, race, ethnicity, national origin, religion, 
sexual orientation, marital status, family configuration, disability, language, philosophical 
orientation, and socioeconomic status among others.<br/>

<h4>Communication and Collaboration:</h4> We will seek cooperative and mutually beneficial relationships with other academic 
institutions, businesses, charitable organizations, and governments at home and abroad to enhance and support our educational, 
research and scholarly activities.</p>
      <Ufooter/>
      <Footer/>
      </div>
  )
}

export default Aboutus