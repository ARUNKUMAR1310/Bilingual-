import React from 'react'

export default function About() {
  return (
   <>
    <div className="container-fluid text-center bgcolor">
      <div className="row mt-1">
        <div className="col-lg-4 col-md-6 mt-3">
          <div className="d-flex flex-row justify-content-center">
            <div className="div1">
              <h1 style={{fontSize: "100px"}}>10</h1>
            </div>
            <div className="div2 col-lg-4 mt-3">
              <h5>years</h5>
              <h5>experince</h5>
              <h5>working</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <p>SINCE 2014</p>
          <h5>Trully corporate</h5>
          <h5>company based in</h5>
          <h5>Japan & India</h5>
        </div>
        <div className="col-lg-4 mt-4">
          A next generation IT services company focusing on solving the complex
          problems of business and common people using the cutting edge
          technologies and innovative brains..
          <br /><br />
          <a href="https://www.nexware-global.com/"
            ><span style={{color: "#fa7a11"}}>ABOUT COMPANY</span></a
          >
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-lg-6 mt-5">
          <h1><b>Unfolding the power of digitial solutions</b></h1>
          <div className="rotating-text-wrapper">
            <h2>SAP</h2>
            <h2>Web Development</h2>
            <h2>Mobile Development</h2>
          </div>
        </div>
        <div className="col-lg-6 mt-5">
          <h5><b> A FULL-SERVICE APPROACH TO DIGITAL GROWTH!</b></h5>
          <p>
            We are a prominent organization involved in rendering IT Services.
            Our services are cater to different sectors at cost-competitive
            prices as per the suitability and requirements of the clients.
          </p>
        </div>
      </div>
      <div></div>
    </div>
   </>
  )
}
