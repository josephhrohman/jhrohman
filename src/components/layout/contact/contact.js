import React from 'react';
import './contact.css';

const Contact = () => {
  return(
    <div className="content-body">
      <p>Send me a message!</p>
      <form className="content-form">
        <div className="content-form-top">
          <input type="text" placeholder="Name" className="content-form-inputs"/>
          <input type="email" placeholder="Email" className="content-form-inputs"/>
        </div>
        <div className="content-form-bottom">
          <input type="text" placeholder="Message" className="content-form-message"/>
        </div>
        <button type="submit" className="content-form-submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact;