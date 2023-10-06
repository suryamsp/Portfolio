import './message.css';

export function Message() {

  return (
    <div>
      <p>I Want To Hear From You</p>
      <h2>Contact Me</h2>
<div className='con'>
<div>
<div className='left-side'><img src="img/contact.png" /> <div><h3>Contact Me:</h3><p>xxxxxxxxxxx</p></div></div>
      <div className='left-side'><img src="img/gmail.png" /> <div><h3>Email Me:</h3><p>xxxxxxxxxxx</p></div></div>
      <div className='left-side'><img src="img/Maps.png" /> <div><h3>Location:</h3><p>Chennai</p></div></div>
</div>
<div>
  <div><input /><input /></div>
  <input></input>
  <textarea></textarea>
  <button>SEND MESSAGE</button>
</div>
</div>
    </div>
  );
}
