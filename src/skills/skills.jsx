import "./skills.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css/bundle';

export function Skills({sty}) {

    const img=[{
        "img":"/img/HTML.png",
        "tit":"HTML"
    },
    {
        "img":"/img/css.png",
        "tit":"CSS"
    },{
        "img":"/img/boot.png",
        "tit":"BOOTSTRAP"
    },{
        "img":"/img/git.png",
        "tit":"GIT"
    },
    {
        "img":"/img/js.png",
        "tit":"JAVA SCRIPT"
    },
    {
        "img":"/img/mongodb.png",
        "tit":"MONGO DB"
    },{
        "img":"/img/node.png",
        "tit":"NODE JS"
    },{
        "img":"/img/Python.png",
        "tit":"PYTHON"
    },{
        "img":"/img/React.png",
        "tit":"REACT"
    },
    {
        "img":"/img/sql.png",
        "tit":"SQL"
    },
    {
        "img":"/img/Vs.png",
        "tit":"VISUAL STUDIO"
    }
];
  return (
    <div className="skill_contain">
    <h2  className="skill_con1">My Skills Progress so far</h2>
    <h3  className="skill_con2"style={sty}>My Skills</h3>
    <div className="container">
  <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      autoplay={{ delay: 1000,disableOnInteraction: false}}
      spaceBetween={0}
      slidesPerView={6}
      loop={true}
   
    >
          {img.map((dta,index)=> <SwiperSlide key={index}  ><div key={index} className="skill-con">
        <div className="circle"><img className='skill_img' src={dta.img} /></div>
        <h3>{dta.tit}</h3>
    </div></SwiperSlide>)}
    </Swiper>
  </div><div id="work" ></div>
    </div>
  );
}
