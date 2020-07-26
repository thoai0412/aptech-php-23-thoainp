import React, { Component } from 'react';
import FakeLink from '../../../../../../../../Details/FakeLink';
class index extends Component {
  onFormSubmitHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form
        action=""
        onSubmit={this.onFormSubmitHandler}
        className="Client__Carousel__Visited__Login-Form d-flex flex-column justify-content-between rounded-0 border w-100 mb-lg-2"
      >
        <div className="form-group m-0 d-flex justify-content-center align-items-center border-bottom bg-yellow-cz-custom">
          <h3 className="text-center my-3 text-uppercase">Sign In</h3>
        </div>

        <div className="form-group row m-3 mt-4 mt-lg-5">
          <div className="input-group">
            <input
              type="email"
              className="form-control rounded-0"
              placeholder="Email ..."
            />
          </div>
        </div>
        <div className="form-group row m-3">
          <div className="input-group">
            <input
              type="password"
              className="form-control rounded-0"
              placeholder="Password ..."
            />
          </div>
        </div>

        <div className="form-group d-flex justify-content-between m-3 pb-3 ">
          <div className="form-check d-flex align-items-center">
            <label
              className="mb-0 Default--font-size-1-3"
              htmlFor="js-remember-me"
            >
              <input className="form-check-input" type="checkbox" name="" />
              <span className="pl-2">Remember Me</span>
            </label>
          </div>
          <button className="btn btn-sm bg-yellow-cz-custom border rounded-0">
            Log In
          </button>
        </div>

        <div className="form-group row m-2 pt-2 d-flex justify-content-between border-top">
          <FakeLink className="text-muted text-capitalize">
            Forget password ?
          </FakeLink>
          <FakeLink
            className="text-muted text-capitalize"
            clicked={this.props.onButtonSignUpClicked}
          >
            Wanna Sign Up ?
          </FakeLink>
        </div>
      </form>
    );
  }
}

export default index;
