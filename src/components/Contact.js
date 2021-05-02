import React from "react";
import "./Contact.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contactIdd" >
     <h1 style={{color:'white',display:'flex',justifyContent:'center'}}>Feel Free to Contact</h1>
      <form>
        <input name="name" type="text" class="feedback-input" placeholder="Name" />
        <input name="email" type="text" class="feedback-input" placeholder="Email" />
        <textarea name="text" class="feedback-input" placeholder="Message"></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default Contact;
