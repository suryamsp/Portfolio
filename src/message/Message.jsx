import './message.css';

export function Message() {

  return (
    <div>
      <h2 className="ser_con1">I Want To Hear From You</h2>
      <h2 className='ser_con2'>Contact Me</h2>
<div className='con'>
<div className='details'>
      <div className='left-side'><img src="img/contact.png" /> <div><h3>Contact Me:</h3><p>xxxxxxxxxxx</p></div></div>
      <div className='left-side'><img src="img/gmail.png" /> <div><h3>Email Me:</h3><p>xxxxxxxxxxx</p></div></div>
      <div className='left-side'><img src="img/Maps.png" /> <div><h3>Location:</h3><p>Chennai</p></div></div>
</div>
<div className='form'>
  <div className='form_line'><input className='line1' placeholder='Enter Name'/><input className='line1' placeholder='Email Address' /></div>
  <input className='line2' placeholder='Your subject'></input>
  <div><textarea className='line3' placeholder='Message'></textarea></div>
  <button className='form_btn'>SEND MESSAGE</button>
</div>
</div>
    </div>
  );
}
