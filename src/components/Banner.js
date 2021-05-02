import React from "react";
import pic1 from "./shakil-portfolio-pic-removebg-preview.png";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Shakiazzaman Shakil",
    text:
      "i,m Shakiazzaman, professional web developer with long time \
    experience in this field​",
    image: pic1,
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <FaPinterest className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="https://drive.google.com/file/d/1jeoPHcTlHSi7uI0OfwpUMroLv24irbEa/view?usp=sharing" className="btn btn-outline">
                    Download My Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={pic1} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
