import React from 'react'
import "./style1.css";

function Products() {
  return (
    <div>
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
    </div>
  )
}

export default Products
