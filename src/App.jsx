import { useState } from 'react'
import { Link } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import { Top_Bar } from './nav_bar/Nav_bar';
import { Intro } from './intro/intro';
import { About } from './About/About';
import { Service } from './Service/service'
import { Skills } from './skills/skills';
import { Work } from './work/work';
import { Contact } from './contact/contact';
import { Message } from './message/Message';
import { ThemeProvider, createTheme } from '@mui/material';
import Paper from '@mui/material/Paper';



function App() {
  const [mode,setmode]=useState("dark");
  const darkTheme =createTheme({
    palette: {
      mode: mode,
    },
  });

  const sty={
    color: mode=="dark" ? "white" : "black"
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <Paper elevation={4} >
    <div id="home" >
<Top_Bar mode={mode} setmode={setmode} sty={sty}/>
  <Intro sty={sty} />
<About  sty={sty} />
<Service sty={sty}  />
<Skills  sty={sty} /> 
<Work  sty={sty} />
 <Contact  sty={sty} />
<Message  sty={sty} />
   </div>
    </Paper >
  </ThemeProvider >
  )
}

export default App


