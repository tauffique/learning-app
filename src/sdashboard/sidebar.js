
import React from "react";
const Sidebar=()=>{
    return(
        <div className="row" style={{bsGutterX: '0 !important'}}>
        <div className="col-md-2" style={{}}>
          <div className="sidebar" style={{height: '400px', position: 'absolute'}}>
            <div className="sidebar-wrapper" style={{backgroundColor: 'white'}}>
              <ul className="nav">
                <li>
                  <a href="#html">
                    <i className="tim-icons icon-atom" />
                    <p style={{color: 'rgb(73, 73, 73)', fontWeight: 'bold', fontSize: '14px', marginTop: '30px', marginLeft: '50px'}}>
                      Dashboard</p>
                  </a>
                </li>
                <li>
                  <a href="#html">
                    <i className="tim-icons icon-atom" />
                    <p style={{color: 'rgb(47, 207, 47)', fontSize: '14px'}}>Live Classes</p>
                  </a>
                </li>
                <li>
                  <a href="#html">
                    <i className="tim-icons icon-pin" />
                    <p style={{color: 'black', fontSize: '14px'}}>Courses</p>
                  </a>
                </li>
                <li>
                  <a href="#html">
                    <i className="tim-icons icon-bell-55" />
                    <p style={{color: 'black', fontSize: '14px'}}>Notifications</p>
                  </a>
                </li>
                <li>
                  <a href="#html">
                    <i className="tim-icons icon-single-02" />
                    <p style={{color: 'black', fontSize: '14px'}}>Syllabus</p>
                  </a>
                </li>
                <li>
                  <a href="#html">
                    <i className="tim-icons icon-puzzle-10" />
                    <p style={{color: 'black', fontSize: '14px'}}>Achievement</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Sidebar;
