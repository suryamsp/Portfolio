import './work.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination} from "swiper/modules";
// Import Swiper styles
import 'swiper/css/bundle';


export function Work({sty,data}){


    return(
        <div id="work"  className='work-cont'>
              <h2  className="ser_con1">{data.store[4].work.wo_title}</h2>
         <h3  className="ser_con2" style={sty} >{data.store[4].work.wo_title1}</h3>
<div className='work-flex'>
<div className="work_con">
            <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      breakpoints={{
        50: {
         slidesPerView: 1,
       },  
       650: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       }    
   }}
      loop={true}
      >  {(data.store[4]["wo-detail"]).map((dta,index)=>( <SwiperSlide key={index} ><div key={index} className="cont">
      <img className="work_img" src={dta.imge} />
      <div className='text-con'> 
      <p className="work_con1">{dta.code}</p>
      <h2  className="work_con2">{dta.name}</h2>
      <p className="work_con3">{dta.sum}</p>
      <div className='btn' >
      <a href={dta.net} target='_blank'  className='work_btn'>LIVE DEMO</a>
      <a href={dta.git}  target='_blank' className='work_btn'><GitHubIcon /><p className='work_name'>SOURCE CODE</p></a>
      </div>
      </div>
      </div></SwiperSlide>))}
      </Swiper>
      

    
           </div>
</div>
        </div>
    );
}