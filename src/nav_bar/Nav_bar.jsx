import './Nav_bar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export function Top_Bar(){
    return(
        <div className='navbar'>
        <Box >
      <AppBar  sx={{backgroundColor:"black",}} position="static">
        <Toolbar sx={{ display:"flex", justifyContent:'space-between',}}>
      
        
        <img className='logo' src='img\logo.png'></img>
        <div className='nav_cont'>
          <a className="nav_btn" href="#home" >HOME</a>
          <a className="nav_btn" href="#about">ABOUT</a>
          <a className="nav_btn" href="#skill">SKILLS</a>
          <a className="nav_btn" href="#work">MY WORK</a>
          <a className="nav_btn" href="#contact">CONTACT</a>
         <a className='Git_icon' href='https://github.com/dashboard' target="_blank"> <GitHubIcon sx={{ fontSize: "40px", marginRight: "100px" }} /></a>
        </div>
      
    
         
        </Toolbar>
      </AppBar>
    </Box>
    </div>
);
}