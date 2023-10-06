import DownloadIcon from '@mui/icons-material/Download';
import './About.css'

export function About() {
  return (
    <div className='Third_bar'>
      <div>
        <img className='Third_bar_img' src='./img/pngegg.png' />
      </div>
      <div className='Third_bar_con'>
        <p className='titl1'>ABOUT ME</p>
        <p className='titl2'>WHY HIRE ME FOR YOUR NEXT PROJECT</p>
        <p className='tit3'>Iam 25 years old creative SOFTWARE DEVELOPER. I bulid clean, appealing, and function interfaces which comply with the latest web standard </p>
        <button className='btns'>DOWNLOAD CV <DownloadIcon /></button>
      </div>
    </div>
  );
}
