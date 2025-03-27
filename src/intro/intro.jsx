import SendIcon from '@mui/icons-material/Send';
import "./intro.css";

export function Intro({ sty, data }) {
  return (
    <div className="sec_bar">
      <div className="sec_bar_con">
        <p className="tit">{data?.[0].store?.[0].Intro.designation}</p>
        <p className="tit1" style={sty}>{data?.[0].store?.[0].Intro.hi}</p>
        <p className="tit2">{data?.[0].store?.[0].Intro.name}</p>
        <p className="tit3" style={sty}>{data?.[0].store?.[0].Intro.self1}</p>
        <p className="tit3" style={sty}>{data?.[0].store?.[0].Intro.self2}</p>
        <div className="intro-btn">
          <a className="button" href="mailto:murugesansuryamsp@gmail.com" target="_blank">
            <p className="btn_name">{data?.[0].store?.[0].Intro.intro_btn}</p>
            <SendIcon />
          </a>
        </div>
      </div>

      <div className="intro-flex">
        <div>
          <img className="sec_bar_img" src="/img/pice.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
}
