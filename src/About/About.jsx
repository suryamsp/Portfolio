import DownloadIcon from '@mui/icons-material/Download';
import './About.css'

export function About({sty,data}) {
  return (

<div id="about"  className='Third_bar'>
      <div>
        <img className='Third_bar_img' src='./img/pngegg.png' />
      </div>
      <div className='Third_bar_con'>
        <p className='titl1'>{data?.[0].store?.[1].About.ab_title}</p>
        <p className='titl2'>{data?.[0].store?.[1].About.why}</p>
    <div className='about-flex'>
    <div className='about-div'>
       <p className='titl3'style={sty}>{data?.[0].store?.[1].About.ab_intro}</p> 
       <p className='high'>{data?.[0].store?.[1].About.ab_intro2}</p>
       </div>
       <div><p className='titl4'>{data?.[0].store?.[1].About.ab_intro3} </p></div>
    </div>
        <div className="about-btn"><a className='btns'
          href="./img/surya_resume.pdf"
          download
          target="_blank"
        ><p className='btn_name' >{data?.[0].store?.[1].About.about_btn} </p><DownloadIcon /></a></div>
      </div>
</div>
  );
}
