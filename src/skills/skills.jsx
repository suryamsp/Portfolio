import "./skills.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css/bundle';

export function Skills({sty,data}) {

  
  return (
    <div id="skill" className="skill_contain">
    <h2  className="skill_con1">{data.store[3].skill.skill_title}</h2>
    <h3  className="skill_con2" style={sty}>{data.store[3].skill.skill_title1}</h3>
    <div className="container">
  <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      autoplay={{ delay: 1000,disableOnInteraction: false}}
      spaceBetween={0}
      breakpoints={{
           50: {
            slidesPerView: 2,
          },  
          650: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 6,
          }    
      }}
      loop={true}
   
    >
          {(data.store[3]["skill-detail"]).map((dta,index)=> <SwiperSlide key={index}  ><div key={index} className="skill-con">
        <div className="circle"><img className='skill_img' src={dta.img} /></div>
        <h3 className="skill-tit">{dta.tit}</h3>
    </div></SwiperSlide>)}
    </Swiper>
  </div>
    </div>
  );
}
