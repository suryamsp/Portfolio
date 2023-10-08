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

function App() {
 

  return (
    <div id="home">
<Top_Bar />
<Intro />
<About />
<Service />
<Skills /> 
<Work />
 <Contact />
<Message />
   </div>
  )
}

export default App


