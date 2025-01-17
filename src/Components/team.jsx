import React, { Component } from 'react'

export default class Team extends Component {
  render() {
    return <div>
  
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
        <h1>Our Experience Doctors</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item position-relative rounded overflow-hidden">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-1.jpg" alt />
            </div>
            <div className="team-text bg-light text-center p-4">
              <h5>Doctor Name</h5>
              <p className="text-primary">Department</p>
              <div className="team-social text-center">
                <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item position-relative rounded overflow-hidden">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-2.jpg" alt />
            </div>
            <div className="team-text bg-light text-center p-4">
              <h5>Doctor Name</h5>
              <p className="text-primary">Department</p>
              <div className="team-social text-center">
                <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item position-relative rounded overflow-hidden">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-3.jpg" alt />
            </div>
            <div className="team-text bg-light text-center p-4">
              <h5>Doctor Name</h5>
              <p className="text-primary">Department</p>
              <div className="team-social text-center">
                <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item position-relative rounded overflow-hidden">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-4.jpg" alt />
            </div>
            <div className="team-text bg-light text-center p-4">
              <h5>Doctor Name</h5>
              <p className="text-primary">Department</p>
              <div className="team-social text-center">
                <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  
</div>

  }
}
