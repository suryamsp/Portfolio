import SendIcon from '@mui/icons-material/Send';
import "./intro.css"

export function Intro() {
  return (
    <div  className='sec_bar'>
      <div className='sec_bar_con' >
        <p className='tit'>SOFTWARE DEVELOPER</p>
        <p className='tit1'> Hey! I Am</p>
        <p className='tit2'>SURYA</p>
        <p className='tit3'>Am software Developer passionate and</p>
        <p className='tit3'>experienced in building Web application</p>
       <div className="intro-btn"> <a className='button' href='https://mail.google.com/' target='_blank'><p className='btn_name'>HIRE ME</p> <SendIcon /></a></div>
      </div>
      <div>
        <img className='sec_bar_img' src='./img/pice.png' />
      </div>
    </div>
  );
}
