import DownloadIcon from '@mui/icons-material/Download';
import './About.css'

export function About({sty}) {
  return (

<div id="about"  className='Third_bar'>
      <div>
        <img className='Third_bar_img' src='./img/pngegg.png' />
      </div>
      <div className='Third_bar_con'>
        <p className='titl1'>ABOUT ME</p>
        <p className='titl2'style={sty}>WHY HIRE ME FOR YOUR NEXT PROJECT</p>
        <p className='titl3'style={sty}>Iam 25 years old creative <label>SOFTWARE DEVELOPER</label>. I bulid clean, appealing, and function interfaces which comply with the latest web standard </p>
        <a className='btns'
          href="https://drive.google.com/drive/my-drive"
          download="surya_resume.pdf"
          target="_blank"
        ><p className='btn_name' >DOWNLOAD CV </p><DownloadIcon /></a>
      </div>
</div>
  );
}
