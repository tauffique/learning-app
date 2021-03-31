import React from 'react';
function Service(){
    return(
      <section className="mini" id="work-process">
      <div className="mini-content">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="info">
                <h1>Our Services</h1>
              </div>
            </div>
          </div>
          {/* ***** Mini Box Start ***** */}
          <div className="row">
            <div className=" col-md-3">
              <a href="#" className="mini-box">
                <img className="card-img" style={{width: '45%'}} src="./assets/img/physics.svg" alt="Card image cap" />
                <strong style={{color: 'black'}}>Online Classes</strong>
                <span>Godard pabst prism fam cliche.Some qui  </span>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="mini-box">
                <img className="card-img" style={{width: '45%'}} src="./assets/img/physics.svg" alt="Card image cap" />
                <strong style={{color: 'black'}}>Certification</strong>
                <span>Godard pabst prism fam cliche.Some quic </span>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="mini-box">
                <img className="card-img" style={{width: '45%'}} src="./assets/img/physics.svg" alt="Card image cap" />
                <strong style={{color: 'black',}}>Qualified Faculty</strong>
                <span>Godard pabst prism fam cliche.Some quick  </span>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="mini-box">
                <img className="card-img" style={{width: '45%'}} src="./assets/img/physics.svg" alt="Card image cap" />
                <strong style={{color: 'black'}}>Revise</strong>
                <span>Godard pabst prism fam cliche.Some quick  </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
export default Service;