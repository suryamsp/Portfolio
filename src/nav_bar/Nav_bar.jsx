import './Nav_bar.css';
import Button from '@mui/material/Button';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export function Top_Bar({mode,setmode,sty}){
  
    return(

    <div className='nav-bar'>
      <nav className={mode == "dark" ? "navbar navbar-expand-md navbar-dark bg-dark fixed-top" : "navbar navbar-expand-md navbar-light bg-light fixed-top"} style={{maxWidth:"1350px" }}  >
      <div id="navbar" className="container-fluid">
      <img className='logo' src='./img/logo.png'></img>
        <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "  ></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
          <div className="navbar-nav " style={sty}>
            <a className="nav-link"  style={sty}  href="#home">HOME</a>
            <a className="nav-link" style={sty}  href="#about">ABOUT</a>
            <a className="nav-link"  style={sty} href="#service">SERVICE</a>
            <a className="nav-link"  style={sty} href="#skill">SKILLS</a>
            <a className="nav-link" style={sty}  href="#work">MY WORK</a>
            <a className="nav-link"  style={sty} href="#contact">CONTACT</a>
          <i className="bi bi-github" style={sty} ></i>
          <Button id='theme' onClick={()=> setmode(mode=="light" ? "dark" : "light")} color="inherit"
          
          >{mode== "light" ? <Brightness7Icon sx={{fontSize:"30px"}} /> : <Brightness4Icon sx={{fontSize:"30px"}} style={sty}/>} </Button>   
          </div>
        </div>
      </div>
    </nav>
    </div>
);
}