import React from 'react';
import './home.css';
import siteBg from "./photos/bg.jpg";
import teaIcon from "./photos/tea 1.png";
import dishIcon from "./photos/icon.png";
import drinkIcon from "./photos/icon (2).png";
import dessertIcon from "./photos/icon (1).png";
import sandwichImg from "./photos/Image.jpg";
import phoneLogo from "./photos/phone.png";
import mailLogo from "./photos/mail.png";
import locationMarker from "./photos/location-marker.png";
const Home = () => {
  return (
    <>
    <div className="homeBody">
          <main className="main">
  <img src={siteBg} alt="" />
  <div className="main_content">
    <h1>Best food for your</h1>
    <h1>taste</h1>
    <p>
      Discover delectable cuisine and unforgettable moments in our welcoming,
      culinary haven.
    </p>
    <button className="main_btn">Book a Table</button>
    <button>Explore Menu</button>
  </div>
</main>

<section>
  <h1>Browse Our Menu</h1>
  <div className="container">
    <div className="section_content">
      <div className="section_icon">
        <img src={teaIcon} alt="" />
      </div>
      <h3>Breakfast</h3>
      <p>
        In the new era of technology we look in the future with certainty and
        pride for our life.
      </p>
      <a href="/">Explore Menu</a>
    </div>
    <div className="section_content">
      <div className="section_icon">
        <img src={dishIcon} alt="" />
      </div>
      <h3>Main Dishes</h3>
      <p>
        In the new era of technology we look in the future with certainty and
        pride for our life.
      </p>
      <a href="/">Explore Menu</a>
    </div>
    <div className="section_content">
      <div className="section_icon">
        <img src={drinkIcon} alt="" />
      </div>
      <h3>Drinks</h3>
      <p>
        In the new era of technology we look in the future with certainty and
        pride for our life.
      </p>
      <a href="/">Explore Menu</a>
    </div>
    <div className="section_content">
      <div className="section_icon">
        <img src={dessertIcon} alt="" />
      </div>
      <h3>Desserts</h3>
      <p>
        In the new era of technology we look in the future with certainty and
        pride for our life.
      </p>
      <a href="/">Explore Menu</a>
    </div>
  </div>
</section>

<section className="section2">
  <div className="parent">
    <div className="section2_img">
      <img src={sandwichImg} alt="" />
    </div>
    <div className="section2_about">
      <h2>We provide healthy food for your family.</h2>
      <p className="section2_p1">
        Our story began with a vision to create a unique dining experience that
        merges fine dining, exceptional service, and a vibrant ambiance. Rooted
        in city's rich culinary culture, we aim to honor our local roots while
        infusing a global palate.
      </p>
      <p className="section2_p2">
        At place, we believe that dining is not just about food, but also about
        the overall experience. Our staff, renowned for their warmth and
        dedication, strives to make every visit an unforgettable event.
      </p>
      <button>More About Us</button>
    </div>
    <div className="come_visit">
      <div className="come_visitP">
        <h3>Come and visit us</h3>
        <div>
          <img src={phoneLogo} alt="" />
          <p>(414) 857 - 0107</p>
        </div>
        <div>
          <img src={mailLogo} alt="" />
          <p>happytummy@restaurant.com</p>
        </div>
        <div>
          <img src={locationMarker} alt="" />
          <span className="us_p">
            <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</section><br />

    </div>

    </>
  );
}

export default Home;
