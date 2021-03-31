import React from 'react';
function Commit(){
    return(
        <section id="why-us" className="wow fadeIn ">
        <div className="container-fluid ">
          <header className="section-header">
            <h3>We are commited With</h3>
          </header>
          <div className="row row-eq-height justify-content-center ">
            <div className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <div className="card-body">
                  <img className="comit-img" src="assets/img/intro-img.svg" /> 
                  <h5 className="card-title">World class education</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <div className="card-body">
                  <img className="comit-img" src="assets/img/intro-img.svg" /> 
                  <h5 className="card-title">Best counselling</h5>
                </div>
              </div>
            </div>  <div className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <div className="card-body">
                  <img className="comit-img" src="assets/img/intro-img.svg" /> 
                  <h5 className="card-title">24*7 Support</h5>
                </div>
              </div>
            </div>
          </div>
          </div></section>
         
    );
}
export default Commit;