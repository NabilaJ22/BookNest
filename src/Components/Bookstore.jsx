import React from 'react';
import './Bookstore.css';

import Footer from './Footer';
import Navbar from './Navbar';

function Bookstore() {
  return (
    <>
      {/* Section */}
      <section>
        {/* <Navber/> */}
        <Navbar/>
        {/* <nav>
          <div className="logo">
            <img src="image/logo.png" alt="Logo" />
          </div>

          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Featured">Featured</a></li>
            <li><a href="#Arrivals">Arrivals</a></li>
            <li><a href="#Reviews">Reviews</a></li>
            <li><a href="#Blog">Blog</a></li>
          </ul>

          <div className="social_icon">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-heart"></i>
          </div>
        </nav> */}

        <div className="main">
          <div className="main_tag">
            <h1>
              WELCOME TO<br />
              <span>BOOK STORE</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias atque laborum
              non fuga ex deserunt. Exercitationem velit ducimus praesentium, obcaecati hic voluptate id
              tenetur fuga illum quidem omnis? Rerum?
            </p>
            <a href="#" className="main_btn">Learn More</a>
          </div>

          <div className="main_img">
            <img src="image/table.png" alt="Table" />
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="services">
        <div className="services_box">
          <div className="services_card">
            <i className="fa-solid fa-truck-fast"></i>
            <h3>Fast Delivery</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="services_card">
            <i className="fa-solid fa-headset"></i>
            <h3>24 x 7 Services</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="services_card">
            <i className="fa-solid fa-tag"></i>
            <h3>Best Deal</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="services_card">
            <i className="fa-solid fa-lock"></i>
            <h3>Secure Payment</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="about">
        <div className="about_image">
          <img src="image/about.png" alt="About Us" />
        </div>
        <div className="about_tag">
          <h1>About Us</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis
            architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo?
            Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates
            id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.
          </p>
          <a href="#" className="about_btn">Learn More</a>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Bookstore;
