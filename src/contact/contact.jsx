import { Message } from "../message/Message";
import  "./contact.css";

export function Contact(){
    return(
       <div className="con_contain">
         <div className="big-con">
            <div>
            <h2 className="con_tit1">Newsletter</h2>
            <p className="con_tit2">Let's Work Together</p>
            <p className="con_tit3">Are you imperssed and want aproject done,give a email me any time</p>
            </div>
          <div className="email_con">
            <input className="con_input" placeholder="Email address " />
            <button className="con_btn">SUBSCRIBE NOW</button>
          </div>
         
        </div>
       </div>
    );
}

