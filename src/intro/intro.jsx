import SendIcon from '@mui/icons-material/Send';
import "./intro.css"

export function Intro() {
  return (
    <div  className='sec_bar'>
      <div className='sec_bar_con' data-aos="fade-up">
        <p className='tit'>SOFTWARE DEVELOPER</p>
        <p className='tit1'> Hey! I Am</p>
        <p className='tit2'>SURYA</p>
        <p className='tit3'>Am software Developer passionate and experienced in building Web application</p>
        <a className='button' href='https://mail.google.com/' target='_blank'><p className='btn_name'>HIRE ME</p> <SendIcon /></a>
      </div>
      <div>
        <img className='sec_bar_img' src='./img/pice.png' />
      </div>
    </div>
  );
}
