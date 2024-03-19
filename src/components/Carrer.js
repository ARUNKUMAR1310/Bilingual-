import React from "react";
import "./style1.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from "../img/angular.svg";
import pic2 from "../img/android.svg";
import pic3 from "../img/aws.svg";
import pic4 from "../img/html5.svg";
import pic5 from "../img/css3.svg";
import pic6 from "../img/dart.svg";
import pic7 from "../img/fllutter.svg";
import pic8 from "../img/react.svg";
import pic9 from "../img/git.svg";
import pic10 from "../img/java.svg";
import pic11 from "../img/laravel.svg";
import pic12 from "../img/mysql.svg";
import pic13 from "../img/node.svg";
import pic14 from "../img/ios.svg";
import pic15 from "../img/python.svg";
import pic16 from "../img/selenium.svg";
import pic17 from "../img/spring-boot.svg";
import pic18 from "../img/vue.svg";
import pic19 from "../img/php.svg";
// import Slider from "react-slick";
import pic20 from "../img/codeIgniter.svg";
import pic21 from "../img/Cognizant-Logo-removebg-preview.png";
import pic22 from "../img/download__1_-removebg-preview.png";
import pic23 from "../img/download-removebg-preview.png";
import pic24 from "../img/images__1_-removebg-preview.png";
import pic25 from "../img/fudosan.svg";
import pic26 from "../img/irodori.svg";

export default function Carrer() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid bg-dark text-white">
        <div className="row mt-3">
          <div className="col-lg-6 mt-3">
            <h1 className="text-outline-light">Proud Stories</h1>
          </div>
          <div className="col-lg-6 mt-3">
            <p>
              We are a team of 100+ who are dedicated to serving the customers
              and have been functioning in the IT industry since 2014
            </p>
          </div>
        </div>
        <div className="grid-container bg-dark">
          <div className="item1">
            <h1 style={{ fontWeight: 900 }}>
              150<sup style={{ color: "#fa7a11" }}>+</sup>
            </h1>
            <p>Clients</p>
          </div>
          <div className="item2">
            <h1 style={{ fontWeight: 900 }}>
              170<sup style={{ color: "#fa7a11" }}>+</sup>
            </h1>
            <p>Projects</p>
          </div>
          <div className="item3">
            <h1 style={{ fontWeight: 900 }}>
              100<sup style={{ color: "#fa7a11" }}>+</sup>
            </h1>
            <p>Professionals</p>
          </div>
          <div className="item4">
            <h1 style={{ fontWeight: 900 }}>
              30<sup style={{ color: "#fa7a11" }}>+</sup>
            </h1>
            <p>App Design</p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-2">
        <div className="row mt-3">
          <div className="col-lg-6">
            <h1>We are working with</h1>
            <h1>cutting-edge technologies!</h1>
          </div>
          <div className="col-lg-6 mt-2">
            <h5>We use innovative tools and technologies to ensure that</h5>
            <h5>your apps are developed with the most recent technology.</h5>
            <h5>Check out our web development technology stacks:</h5>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-row justify-content-around mt-2">
          <div className="col mt-5">
            <img src={pic1} alt="" className="img-fluid d-block" />
          </div>
          <div className="col mt-5 ">
            <img src={pic2} alt="" className="img-fluid d-block" />
          </div>
          <div className="col mt-5">
            <img src={pic3} alt="" className="img-fluid d-block" />
          </div>
          <div className="col mt-5">
            <img src={pic4} alt="" className="img-fluid d-block" />
          </div>
          <div className="col mt-5">
            <img src={pic5} alt="" className="img-fluid d-block" />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between mt-5">
          <div className="col">
            <img src={pic6} alt="" className="img-fluid d-block" />
          </div>
          <div className="col">
            <img src={pic7} alt="" className="img-fluid d-block" />
          </div>
          <div className="col">
            <img src={pic8} alt="" className="img-fluid d-block" />
          </div>
          <div className="col">
            <img src={pic9} alt="" className="img-fluid d-block" />
          </div>
          <div className="col">
            <img src={pic10} alt="" className="img-fluid d-block" />
          </div>
        </div>
        <div className="col">
          <div className="d-flex flex-row justify-content-around mt-5">
            <div className="col">
              <img src={pic11} alt="" className="img-fluid d-block" />
            </div>
            <div className="col">
              <img src={pic12} alt="" className="img-fluid d-block" />
            </div>
            <div className="col">
              <img src={pic13} alt="" className="img-fluid d-block" />
            </div>
            <div className="col">
              <img src={pic14} alt="" className="img-fluid d-block" />
            </div>
            <div className="col">
              <img src={pic15} alt="" className="img-fluid d-block" />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-around mt-5">
            <div className="col">
              <img src={pic16} alt="" className="img-fluid d-block" />
            </div>
            <div className="col">
              <img src={pic17} alt="" className="img-fluid d-block" />
            </div>
            <div className="col">
              <img src={pic18} alt="" className="img-fluid d-block" />
            </div>
            <div className="col">
              <img src={pic19} alt="" className="img-fluid d-block" />
            </div>
            <div className="col">
              <img src={pic20} alt="" className="img-fluid d-block" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid div5">
        <div className="row mt-3">
          <div className="col-lg-6 mb-3">
            <h1 className="div5-head">
              Let's talk about how we <br />
              can transform your <br />
              business !
            </h1>
          </div>
          <div className="col-lg-6 mb-5 div5-anger">
            <p className="mt-2">Get in touch with our team</p>
            <h1 href="">info@nexware-global.com</h1>
          </div>
        </div>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <h2 className="text-center">Our fortune clients</h2>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="container">
          <Slider {...settings}>
            <div>
              <img
                src={pic21}
                style={{ borderRadius: "75%", width: "200px", height: "200px" }}
              />
            </div>
            <div>
              <img
                src={pic22}
                style={{ borderRadius: "75%", width: "200px", height: "200px" }}
              />{" "}
            </div>
            <div>
              <img
                src={pic23}
                style={{ borderRadius: "75%", width: "200px", height: "200px" }}
              />{" "}
            </div>
            <div>
              <img
                src={pic24}
                style={{ borderRadius: "75%", width: "200px", height: "200px" }}
              />{" "}
            </div>
            <div>
              <img
                src={pic25}
                style={{ borderRadius: "75%", width: "200px", height: "200px" }}
              />{" "}
            </div>
            <div>
              <img
                src={pic26}
                style={{ borderRadius: "75%", width: "200px", height: "200px" }}
              />{" "}
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
