import React from 'react';

const index = () => {
  return (
    <nav className="d-md-block container Navigation" id="js-navigation">
      <div className="row">
        <div className="col-12 d-flex px-0">
          <div className="d-none d-md-flex justify-content-start align-items-center mx-right ">
            <a className="text-muted " href="# ">
              <i className="fas fa-angle-left " />
            </a>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-around w-100">
            <div className="m-2 ">
              <a className="text-dark" href="#/home ">
                Home
              </a>
            </div>
            <div className="m-2 ">
              <a className="text-muted " href="#/home ">
                HTML
              </a>
            </div>
            <div className="m-2 ">
              <a className="text-muted " href="#/home ">
                CSS
              </a>
            </div>
            <div className="m-2 ">
              <a className="text-muted " href="#/home ">
                JavaScript
              </a>
            </div>
            <div className="m-2 ">
              <a className="text-muted " href="#/home ">
                PHP
              </a>
            </div>
            <div className="m-2 ">
              <a className="text-muted " href="#/home ">
                React JS
              </a>
            </div>

            <div className="m-2 ">
              <a className="text-muted " href="#/home ">
                Laravel
              </a>
            </div>
          </div>
          <div className="d-none d-md-flex align-items-center ml-auto ">
            <a className="text-muted float-right " href="# ">
              <i className="fas fa-angle-right " />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
