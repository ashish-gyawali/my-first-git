import React from 'react'
import Top_header from '../Components/Top_header/Top_header'
import Menu_bar from '../Components/Menubar/Menu_bar'
import './style.css'
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Footer from '../Components/Footer/Footer'
import Ufooter from '../Components/UpperFooter/Ufooter' 
const Home = () => {
  return (
    <div>
      <Top_header />
      <Menu_bar />
      <div>
        <p className='we'>Welcome to Nepalgunj College</p>
        <p className='text'>We take immense pride on being the first Information Technology (IT) College in Nepalgunj.
        As a pioneer in the region, we fully understand our responsibility of laying a solid foundation for the IT education
         field across western Nepal. Since our mission is to guide our students to academic excellence, we are committed to 
         delivering top-class IT education that is recognized and respected nationally as well as internationally.
          In other cities there has been quantitative growth in IT education sector at the expense of quality, resulting 
          in graduates who don't fit the needs of job markets. Happily, we pledge before all our future students that our
           courses would always be geared to suit the emerging need of the IT industry through constant interaction between 
           our faculty members and the employers in the IT sector.</p>
      <button className='wb'>Learn More</button>
      <p className='course'>BSc.CSIT: Course Structure Courses</p>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Autoplay ,A11y]}
      spaceBetween={0}
      slidesPerView='auto'
      navigation
      pagination={{ clickable: true }}
      autoplay={{autoplay:true}}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='sem'><button>SEMESTER I</button></SwiperSlide>
      <SwiperSlide className='sem'><button>SEMESTER II</button></SwiperSlide>
      <SwiperSlide className='sem'><button>SEMESTER III</button></SwiperSlide>
      <SwiperSlide className='sem'><button>SEMESTER IV</button></SwiperSlide>
      <SwiperSlide className='sem'><button>SEMESTER V</button></SwiperSlide>
      <SwiperSlide className='sem'><button>SEMESTER VI</button></SwiperSlide>
      <SwiperSlide className='sem'><button>SEMESTER VII</button></SwiperSlide>
      <SwiperSlide className='sem'><button>SEMESTER VIII</button></SwiperSlide>
      </Swiper>
      <br/><br/>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Autoplay ,A11y]}
      spaceBetween={0}
      slidesPerView='auto'
      navigation
      pagination={{ clickable: true }}
      autoplay={{autoplay:true}}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div className='slide'>
      <p className='act'>Our Activities</p>
      <SwiperSlide><div className='act1'></div></SwiperSlide>
      <SwiperSlide><div className='act2'></div></SwiperSlide>
      <SwiperSlide><div className='act3'></div></SwiperSlide>
      <SwiperSlide><div className='act4'></div></SwiperSlide>
      <SwiperSlide><div className='act1'></div></SwiperSlide>
      <SwiperSlide><div className='act2'></div></SwiperSlide>
      <SwiperSlide><div className='act3'></div></SwiperSlide>
      <SwiperSlide><div className='act4'></div></SwiperSlide>
      </div>
      </Swiper>
      </div>
      
    </div>
  )
}

export default Home