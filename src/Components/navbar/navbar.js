import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import siteLogo from "./photos/japanese-food.svg";
import './navbar.css';
import { Link,NavLink } from "react-router-dom";
import twitterLogo from "./photos/twitter.png";
import instaLogo from "./photos/insta.png";
import fbLogo from "./photos/facebook.png";
import githubLogo from "./photos/github.png";

const Navbar = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  useEffect(() => {
    import("jquery/dist/jquery.min.js");
  }, []);

  return (
    <>
      <div className="head">
  <div className="icon">
    <NavLink href="">
      <img src={twitterLogo} alt="" />
    </NavLink>
    <NavLink href="">
      <img src={fbLogo} alt="" />
    </NavLink>
    <NavLink href="">
      <img src={instaLogo} alt="" />
    </NavLink>
    <NavLink href="">
      <img src={githubLogo} alt="" />
    </NavLink>
  </div>
  <div className="contact">
    <img src="./src/phone.png" alt="" />
    <p>(414)-857-0107</p>
    <img src="./src/mail.png" alt="" />
    <p>yummy@bistrobliss</p>
  </div>
</div>


      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img src={siteLogo}/>

          <Link className="navbar-brand" to="/">
            <b>Bistro Bliss</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/blog">
                  Pages
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active"  to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-secondary ms-5" type="submit">
                Book A Table
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
