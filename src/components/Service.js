import React from "react";
import pic1 from "../img/web-dev.jpg";
import pic2 from "../img/mobile-dev1.jpg";
import pic3 from "../img/sap1.jpg";
import pic4 from "../img/digital-marketing.jpg";
import pic5 from "../img/low-code1.jpg";
import pic6 from "../img/business1.jpg";

export default function Service() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 p-2 image-card-div">
            <img src={pic1} className="card-img-top" alt="..." />
          </div>

          <div className="col-lg-4 p-2 image-card-div">
            <img src={pic2} className="card-img-top" alt="..." />
          </div>

          <div className="col-lg-4 p-2 image-card-div">
            <img src={pic3} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 p-2 image-card-div">
            <img src={pic4} className="card-img-top" alt="..." />
          </div>

          <div className="col-lg-4 p-2 image-card-div">
            <img src={pic5} className="card-img-top" alt="..." />
          </div>

          <div className="col-lg-4 p-2 image-card-div">
            <img src={pic6} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
