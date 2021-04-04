import React from 'react';
import Card from '../card2/card2.css'
import physics from '../images/physics.svg'

const Card2 =()=>{
    return(
        <div className="col-md-11">
        <div className="contain" style={{}}>
          <div className="row">
            <div className="col-md-4" data-aos="zoom-in" style={{}}>
              <div className="text-center landing_box_highlight_download">
                <img src={physics} className="academic_img" alt="character" />
                <div className="landing_box_heading">Chemistry Class</div>
                <div className="landing_box_text">
                  <div className="row" style={{padding: '1rem'}}>
                    <div className="col-md-6">
                      Ongoing
                    </div>
                    <div className="col-md-6">
                      <div style={{textAlign: 'center'}}>
                        <span className="dot" />
                      </div>
                    </div>
                  </div>
                  <div className="contain_download_button text-center mx-auto mt-4">
                    <button className="download_button">Join Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" style={{}}>
              <div className="text-center landing_box_highlight_download">
                <img src={physics} className="academic_img" alt="character" />
                <div className="landing_box_heading">Chemistry Class</div>
                <div className="landing_box_text">
                  <div className="row " style={{padding: '1rem'}}>
                    <div className="col-md-6">
                      Ongoing
                    </div>
                    <div className="col-md-6">
                      <div style={{textAlign: 'center'}}>
                        <span className="dot" />
                      </div>
                    </div>
                  </div>
                  <div className="contain_download_button text-center mx-auto mt-4">
                    <button className="download_button">Join Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" style={{}}>
              <div className="text-center landing_box_highlight_download">
                <img src={physics} className="academic_img" alt="character" />
                <div className="landing_box_heading">Chemistry Class</div>
                <div className="landing_box_text">
                  <div className="row" style={{padding: '1rem'}}>
                    <div className="col-md-6">
                      Ongoing
                    </div>
                    <div className="col-md-6">
                      <div style={{textAlign: 'center'}}>
                        <span className="dot" />
                      </div>
                    </div>
                  </div>
                  <div className="contain_download_button text-center mx-auto mt-4">
                    <button className="download_button">Join Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Card2;