import './Nav_bar.css';

export function Top_Bar({mode,setmode}){
  
    return(

    <nav class="navbar navbar-expand-lg bg-body-tertiary  fixed-top">
      <div class="container-fluid">
      <img className='logo' src='./img/logo.png'></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <a class="nav-link" href="#home">HOME</a>
            <a class="nav-link" href="#about">ABOUT</a>
            <a class="nav-link" href="#service">SERVICE</a>
            <a class="nav-link" href="#skill">SKILLS</a>
            <a class="nav-link" href="#work">MY WORK</a>
            <a class="nav-link" href="#contact">CONTACT</a>
          <i className="bi bi-github" ></i>
          </div>
        </div>
      </div>
    </nav>
);
}