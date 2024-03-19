import React from "react";
import "./style1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="https://www.nexware-global.com/"
            target="-blank"
          >
            <img
              src="https://www.nexware-global.com/images/nexware.svg"
              className="nexlogo"
            />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  <span className="navbar-color">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/abo"
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  <span className="navbar-color">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ser"
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  <span className="navbar-color">Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/pro"
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  <span className="navbar-color">Products</span>
                </Link>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#"
                >Services</a
              > 
                <div
                  className="dropdown nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  <p className="dropbtn navbar-color">Services</p>
                  <div className="dropdown-content dropdown-menu">
                    <a href="#" className="dropdown-anc dropdown-item">
                      SAP
                    </a>
                    <a href="#" className="dropdown-anc dropdown-item">
                      Webdevelopment
                    </a>
                    <a href="#" className="dropdown-anc dropdown-item">
                      mobile applications
                    </a>
                    <a href="#" className="dropdown-anc dropdown-item">
                      Low code | No code
                    </a>
                    <a href="#" className="dropdown-anc dropdown-item">
                      Software Testing
                    </a>
                    <a href="#" className="dropdown-anc dropdown-item">
                      Busniess Transformation
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="dropdown nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  <p className="dropbtn navbar-color">Product</p>
                  <div className="dropdown-content dropdown-menu">
                    <a href="#" className="dropdown-anc dropdown-item">
                      Diamond
                    </a>
                    <a href="#" className="dropdown-anc dropdown-item">
                      Daijob Map
                    </a>
                    <a href="#" className="dropdown-anc dropdown-item">
                      Healing Match
                    </a>
                    <a href="#" className="dropdown-anc dropdown-item">
                      TACSIS
                    </a>
                  </div>
                </div>
              </li> */}
              <li className="nav-item">
                <Link
                  to="/car"
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  <span className="navbar-color">Careers</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/con"
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  <span className="navbar-color">Contact Us</span>
                </Link>
              </li>
            </ul>
            <div className="d-flex flex-row justify-content-around">
              <i className="me-3">
                <FontAwesomeIcon icon={faInstagram} />
              </i>
              <i className="me-3">
                <FontAwesomeIcon icon={faFacebook} />
              </i>
              <i className="me-3">
                <FontAwesomeIcon icon={faLinkedin} />
              </i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
