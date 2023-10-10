import './work.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination} from "swiper/modules";
// Import Swiper styles
import 'swiper/css/bundle';


export function Work({sty}){

    const work=[{
        "imge":"./img/Untitled.png",
        "code":"HTML | CSS",
        "name":"Price Card Project",
        "sum":"To create the project by simply Html amd Css only. then button use hover reaction and price list low to premium ",
        "net":"https://pricecardmsp.netlify.app/",
        "git":"https://github.com/suryamsp/price_card.git"
    
    },
    {
        "imge":"./img/Untitled1.png",
        "code":"HTML | CSS | React",
        "name":"Add to Card Project",
        "sum":"To create the project by simple add to card list and remove list.use the Usestate hook to handle array to add card list ",
        "net":"https://addcardmsp.netlify.app/",
        "git":"https://github.com/suryamsp/Add_card.git"
    },
    {
        "imge":"./img/Untitled2.png",
        "code":"HTML | CSS | JavaScript",
        "name":"Calculator Project",
        "sum":"To create the project by simple design calculator.Then DOM methode use to calculate simple mathematical operation",
        "net":"https://calculatormsp.netlify.app/",
        "git":"https://github.com/suryamsp/calculator.git"
    },{
        "imge":"./img/Untitled3.png",
        "code":"HTML | CSS | React",
        "name":"Bootstarp Project",
        "sum":"To create the project Login page to refer bootstarp model. use the navigation to forget password and create password",
        "net":"https://loginmsp.netlify.app/",
        "git":"https://github.com/suryamsp/login_page.git"
        },
]
    return(
        <div className='work-cont'>
              <h2  className="ser_con1">Check Out My Reacet Projects</h2>
         <h3  className="ser_con2" style={sty}>My Work</h3>
           <div className="work_con">
         
            <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={3}

      loop={true}
      >  {work.map((dta,index)=>( <SwiperSlide key={index} ><div key={index} className="cont">
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
    );
}