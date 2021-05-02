import React from "react";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting\
    industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: pic1,
      heading: "Web Development",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
      industry. simply dummy",
      url: "https://last-assignment-6c416.web.app/home",
    },
    {
      id: 2,
      icon: pic2,
      heading: "Photography",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
      url: "https://shakil0000.github.io/Ecommersce/index.html",
    },
    {
      id: 3,
      icon: pic3,
      heading: "Web Desing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
      url: "https://shakil0000.github.io/2nd-websit/index.html",
    },

  ]);
  return (
    <div id="serviceId" className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader">My Projects</h1>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">

                <a href={info.url}>
                  <div className="services__box">
                    <img style={{ width: '300px', height: '300px' }} src={info.icon} alt="" />
                    <div className="services__box-header">{info.heading}</div>
                    <div className="services__box-p">{info.text}</div>
                  </div>
                </a>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
