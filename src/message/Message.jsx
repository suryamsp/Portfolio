import './message.css';

export function Message({sty}) {

  return (
<div id="contact" className='mess_con'>
<div>
      <h2 className="mess_con1">I Want To Hear From You</h2>
      <h2 className='ser_con2' style={sty}>Contact Me</h2>
      </div>
<div className='con'>
<div className='details'>
      <div className='left-side'><img src="img/contact.png" /> <div><h3 style={sty}>Contact Me:</h3><p style={sty}>8825968189</p></div></div>
      <div className='left-side'><img src="img/gmail.png" /> <div><h3 style={sty}>Email Me:</h3><p style={sty}>murugesansuryamsp@gmail.com</p></div></div>
      <div className='left-side'><img src="img/Maps.png" /> <div><h3 style={sty}>Location:</h3><p style={sty}>Chennai</p></div></div>
</div>
<div className="containers">
<div id='fexi-div'>
<div className='form'>
  <div className='form_line'><input className='line1'  placeholder='Enter Name'/><input className='line1' placeholder='Email Address' /></div>
  <input className='line2' placeholder='Your subject'></input>
  <div><textarea className='line3' placeholder='Message'></textarea></div>
  <button className='form_btn'>SEND MESSAGE</button>
</div>
</div>
</div>

    </div>
</div>
  );
}
