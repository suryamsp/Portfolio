import GitHubIcon from '@mui/icons-material/GitHub';
import "./Nav_bar.css"

export function Top_Bar() {
  return (
    <div className="navbar">
      <img className='logo' src='img\logo.png'></img>
      <div className='nav_cont'>
        <label>HOME</label>
        <label>ABOUT</label>
        <label>SKILLS</label>
        <label>MY WORK</label>
        <label>CONTACT</label>
        <GitHubIcon sx={{ fontSize: "40px", marginRight: "100px" }} />
      </div>
    </div>
  );
}
