import "./style/formcontact.css"
import React from 'react';

function Contact() {
    
  return (
  <div className="App-form">
    <h2>Contact</h2>
    <form className="form" >
    
      <ul className="form-container">
        <li>
        <label htmlFor="name">
            Name
          </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="full name"
              required
            ></input>
          </li>
        <li>
          <label htmlFor="email">
            E-mail
          </label>
          <input type="email"
            name="email"
            id="email"
            placeholder="admin@example.com"
            maxLength="254"
            pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
            
            required>
          </input>
        </li>
        <li>
          <label htmlFor="mensaje">Menssage</label>
          <textarea type="text"
           id="text"
           name="text" placeholder="text"  required>
          </textarea>
        </li>   
      </ul>
      <button type="submit" className="buttonSend">Send</button>
    </form>
  </div>
  )
}
export default Contact;
