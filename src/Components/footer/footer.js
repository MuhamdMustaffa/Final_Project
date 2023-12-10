import React from 'react';
import './footer.css';
import footerLogo from './photos/japanses-food.png';

const Footer = () => {
  return (
    <>
    <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="footer-container my-5">
    {/* Footer */}
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#474747" }}
    >
    
      <section className="footer-section">
        <div className="container text-center text-md-start mt-5 p-1">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <div className="footer-title d-flex flex-wrap">
              <img src={footerLogo}  />
              <h6>Bistro Bliss</h6>
            </div>
            
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
          
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6>Pages</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Menu
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Pricing
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Blog
                </a>
              </p>


              <p>
                <a href="#!" className="text-white">
                  Contact
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Delivery
                </a>
              </p>
            </div>
          
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6>Utility Pages</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-white">
                  Start Here
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Styleguide
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Password Protected
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  404 Not Found
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Licenses
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Changelog
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  View More
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6>Follow us on Instagram</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <i className="fas fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3" /> + 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" , color : "#ADB29E" }}
      >
        Copyright 2023 Hashtag Developer. All Rights Reserved

      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>
</>
  );
}

export default Footer;
