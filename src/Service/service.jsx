import "./service.css"

export function Service() {

  const datas=[{
    "img":"/img/web.png",
    "title":"Web Development",
    "summary":"As a web developer use codeing language like HTML,CSS,JavaScript,and Python to bulid websites and web applications."
  },
  {
    "img":"/img/apintigraion.png",
    "title":"Api Intergration",
    "summary":"I offer Api intergration service in existing applications or in software I create from scratch."
  },
  {
    "img":"/img/Software.png",
    "title":"Software Development",
    "summary":"I offer world-class custom software development service designed specifically for your business and ready to satisfy your exclusive needs."
  }];

  return (
    <div className="main_contain" id="service">
        <div >
       <div className="ser_con1"> <h2>WHAT SERVICE I OFFER YOU</h2></div>
        <div className="ser_con2"><h3>Service</h3></div>
        </div>
       
<div className="ser_small">
  {datas.map((dta,index)=>
       <div className="ser_contain" key={index}   >
     <img className="web_img" src={dta.img} />
         <h3>{dta.title}</h3>
         <h4>{dta.summary}</h4> 
     {/* <div>
       <img src="/img/lo.png" />
     </div> */}
    </div>)}

</div>
    </div>
  );
}



