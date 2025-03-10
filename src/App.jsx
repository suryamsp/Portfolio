import { useEffect, useState } from 'react'
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






function App({}) {
  
  
  const [data,setdata]=useState(null);
 
  const [mode,setmode]=useState("dark");
  

  const getdata=()=>{
    fetch('https://portfolio-back-cdes.onrender.com/')
   .then((data) => data.json())
   .then((mvs) => setdata(mvs));}
  useEffect(()=> getdata(),[]);
    
  
  
  // console.log(list);

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

    {data ? (
        <>
          <Top_Bar mode={mode} setmode={setmode} sty={sty} />
          <Intro sty={sty} data={data} />
          <About sty={sty} data={data} />
          <Service sty={sty} data={data} />
          <Skills sty={sty} data={data} />
          <Work sty={sty} data={data} />
          <Contact sty={sty} data={data} />
          <Message sty={sty} data={data} />
        </>
      ) : (
        <Load />
      )}
   </div>
    </Paper >
  </ThemeProvider >
  )
}

function Load(){
  return(
    <div>
      
    </div>
  );
}


export default App


