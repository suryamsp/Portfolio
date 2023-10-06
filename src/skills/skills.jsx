import "./skills.css";

export function Skills() {

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
    <div>
    <h2>My Skills Progress so far</h2>
    <h3>My Skills</h3>
    <div className="container">
   {img.map((dta,index)=> <div key={index} className="skill-con">
        <div className="circle"><img src={dta.img} /></div>
        <h3>{dta.tit}</h3>
    </div>)}
    </div>
    </div>
  );
}
