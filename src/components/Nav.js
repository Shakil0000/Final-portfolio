import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
             <h1 style={{color:'white'}}>My Portfolio</h1>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="#serviceId">Projects</a>
              </li>
              <li>
                <a href="#aboutId">About</a>
              </li>
              <li>
                <a href="#blogId">Blog</a>
              </li>
              <li>
                <a href="#contactIdd">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
