import React from 'react';
function Footer(){
    return(
     

        <footer id="footer">
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <h3>New Education</h3>
                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a  href="#">About</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Program</a></li>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 foot">
                <h4>Classes</h4>
                <p style={{color:'black'}}>
                  Basic</p><br></br>
                  <p style={{color:'black'}}>Intermediate</p><br></br>
                  <p style={{color:'black'}}>Advanced</p>
               
              </div>
              <div className="col-lg-3 col-md-6 footer-newsletter">
                <div>
                  <a href="#" className="btn btn5 " style={{width: '280px', height: '4.5rem', backgroundColor:'blue', borderRadius: '10px',textAlign:'center',color:'white'}}>TRY IT FREE
                  <p>no initial payment required</p></a>
                </div>
              </div>
              <div className="container-fluid">
                <div className="copyright">
                  © Copyright <strong>New Education</strong>. All Rights Reserved
                </div>
                <div className="credits">
                  <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
                 
                </div></div></div></div></div></footer>
    );
  }
    export default Footer;