import React from "react";
import pic from "./shakil-portfolio-pic-removebg-preview.png";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Shakiazzaman Shakil" },
    { id: 2, title: "Email:", text: "shakiazzaman.s@gmail.com" },
    { id: 3, title: "Phone:", text: "01701543890" },
    {
      id: 4, title: "Linkedin", text: "Shakiazzaman Shakil" },
  ]);
  return (
    <div id="aboutId" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img style={{width:'450px',height:'400px'}} src={pic} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              Hi! I am Shakiazzaman Shakil, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.
              </div>
              <div className="about__info-p2">
                <h3>I have working experience with <strong style={{color:'green'}}>HTML , CSS , BOOTSTRAP , JAVASCRIPT , REACT , NODE JS , EXPRESS JS , and MONGODB</strong> </h3>
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
