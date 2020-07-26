import React, { Component } from 'react';
import SideLogin from '../../Blog/Side/Form/Login';

import Button from '../../../../../../Details/Button';

import { onePartSlides } from '../../../../../../../helpers/image';
class index extends Component {
  state = {
    slides: []
  };
  componentDidMount() {
    const slides = [...onePartSlides()];
    this.setState({
      slides
    });
  }
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-8 px-xl-0">
            {this.state.slides && (
              <img
                src={this.state.slides[0]}
                className="w-100 h-100 Image--filter"
                alt=""
              />
            )}
            <div className="Client__Carousel__Visited--slogan">
              <h1 className="text-uppercase text-white font-weight-bold">
                Welcome back
              </h1>
              <small className="text-uppercase text-white">
                THE FIRST FREE WEB BASED QUOTING SYSTEM FOR SMASH REPAIRERS
              </small>
              <br />
              <Button
                className="btn btn-outline-dark bg-yellow-cz-custom rounded-0 text-dark text-uppercase mt-3 font-weight-bold"
                clicked={this.props.onButtonLogInClicked}
              >
                sign in now
              </Button>
            </div>
          </div>

          <div className="d-none d-md-flex col-md-4 flex-column align-items-center justify-content-between">
            <SideLogin onButtonLogInClicked={this.props.onButtonLogInClicked} />
            <div
              className="d-none d-lg-flex justify-content-center align-items-end Client__Carousel__Visited__Ads w-100 h-25"
              style={{
                background: "url('https://dummyimage.com/16:9x1080')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              {/* <img
                // src={logoImage()}
                src="https://dummyimage.com/16:9x1080"
                alt=""
                className="self-align-center"
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
