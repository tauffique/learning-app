import React from 'react';
const  Enroll=()=>{
    return(
      <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">

              <div className="col-md-6  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>Make your child <br></br>learn & grow faster<br></br><strong>With Us</strong></h1>
                <div className="my-3">
               <a href="" className="btn-get-started">
                 Enroll Now
               </a>
</div>              </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src="assets/img/intro-img.svg" className="img-fluid" alt="image"></img>
            </div>
           </div>
            </div>
          </div>
        </div>
      </section>
</>
    );
}
export default Enroll;
