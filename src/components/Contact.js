import React from "react";
import "./style1.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Contact() {
  return (
    <div>
      <div className="container-fluid bg-dark text-white text-start mt-3">
        <div className="row ">
          <div className="col-lg-4 col-md-6 mt-4">
            <h5>NEXWARE TECHNOLOGIES PRIVATE</h5>
            <h5 className="ms-end">LIMITED</h5>
            <h6 className="mt-3">7B, Caledon Square, 7th floor, #348,</h6>
            <h6>Avinashi Rd, Peelamedu, Coimbatore,</h6>
            <h6>TamilNadu-641004.</h6>
            <div className="d-flex flex-row">
              <div>
                <i className="fa-brands fa-facebook-f me-3"></i>
                <i className="fa-brands fa-instagram me-3"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mt-4">
            <h5>Company</h5>
            <h6 className="mt-4">About Us</h6>
            <h6 className="mt-3">Careers</h6>
            <h6 className="mt-3">Contact Us</h6>
          </div>
          <div className="col-lg-3 col-md-6 mt-4">
            <h5>Services</h5>
            <h6 className="mt-4">SAP</h6>
            <h6 className="mt-3">Web Development</h6>
            <h6 className="mt-3">Mobile Development</h6>
            <h6 className="mt-3">Low Code | No Code</h6>
            <h6 className="mt-3">Softwore Testing</h6>
            <h6 className="mt-3">Busniess Transforamtion</h6>
          </div>
          <div className="col-lg-3 col-md-6 mt-4">
            <h5>Contact Us</h5>
            <div className="d-flex flex-row mt-4">
              <MdEmail />
              <h6>info@nexware-global.com</h6>
            </div>
            <div className="d-flex flex-row">
              <FaPhoneAlt />
              <h6>+91 73050 24280</h6>
            </div>
            <div className="d-flex flex-row">
              <FaSkype />
              <h6>Nexware Technologies</h6>
            </div>
            <div className="d-flex flex-row">
              <FaWhatsapp />
              <h6>+91 73050 24280</h6>
            </div>
          </div>
        </div>
        <hr />
        <div className="container ">
          <div className="d-flex flex-row justify-content-between">
            <h6>Privacy Policy</h6>
            <h5>© 2024 NEXWARE TECHNOLOGIES PRIVATE LIMITED</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
