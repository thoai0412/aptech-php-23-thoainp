import React, { Component, Fragment } from 'react';

import { threePartSlides } from '../../../../../../../helpers/image';
import Button from '../../../../../../Details/Button';
import Slide from './Slide';
class index extends Component {
  state = {
    slides: []
  };
  componentDidMount() {
    const slides = [...threePartSlides()];
    this.setState({
      slides
    });
  }

  render() {
    return (
      <div
        className={['d-none d-md-block container-fluid p-0 Carousel '].join(
          ' '
        )}
      >
        <div className="d-flex flex-row h-100">
          <div className="col-12 p-0">
            <div
              id="bs4-slide-carousel"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol className="carousel-indicators Carousel-incaditors">
                {!!this.state.slides &&
                  this.state.slides.map((key, index) => {
                    return (
                      <li
                        key={key}
                        data-target="#bs4-slide-carousel"
                        data-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                      />
                    );
                  })}
              </ol>
              <div className="carousel-inner">
                <div className="Carousel-content d-flex flex-row justify-content-center w-100">
                  <div className="d-flex flex-column">
                    <h1 className="text-yellow-cz-custom text-uppercase font-weight-bold text-center">
                      crashzone
                    </h1>
                    <h4 className="text-white font-weight-bold text-uppercase text-center mb-4">
                      the first free web based quoting system for smash
                      repairers
                    </h4>
                    <div className="d-flex flex-row justify-content-center">
                      <Button className="btn btn-lg text-uppercase btn-outline-light text-white mx-2 rounded-0 px-3 Carousel__button--learn-more">
                        learn more
                      </Button>
                      <Button
                        className="btn btn-lg btn-outline-dark text-uppercase bg-yellow-cz-custom mx-2 rounded-0 px-3 Carousel__button--sign-up"
                        clicked={this.props.onButtonSignUpClicked}
                      >
                        sign up
                      </Button>
                    </div>
                  </div>
                </div>
                {this.state.slides && (
                  <Fragment>
                    {this.state.slides.map((key, index) => {
                      return (
                        <Slide
                          active={index === 0}
                          key={key}
                          url={`url(${this.state.slides[index]})`}
                        />
                      );
                    })}
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
