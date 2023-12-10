import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import siteLogo from "./photos/japanese-food.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navbar.css';

const Navbar = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  useEffect(() => {
    import("jquery/dist/jquery.min.js");
  }, []);

  return (
    <>
      <div className="site-title">
        <div className="title-icons">
          <ul className="social-icons">
            <li>
              <div className="twitter-icon">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
              </div>
            </li>
            <li>
              <div className="facebook-icon">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              </div>
            </li>
            <li>
              <div className="instagram-icon">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </div>
            </li>
            <li>
              <div className="github-icon">
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </div>
            </li>
          </ul>
        </div>
        <div className="site-contact">
          <img src="./src/phone.png" alt="" />
          <p>(414)-857-0107</p>
          <img src="./src/mail.png" alt="" />
          <p>yummy@bistrobliss</p>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img src={siteLogo}/>

          <a className="navbar-brand" href="/#">
            <b>Bistro Bliss</b>
          </a>
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
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Pages
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Contact
                </a>
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
