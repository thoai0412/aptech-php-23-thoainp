import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { authStartLogIn } from '../../../store/actions/admin/auth.action';

import axios from '../../../helpers/axios.config';

import withErrorHandler from '../../../hoc/withErrorHandler';

import { isValidEmail, isValidPassword } from '../../../helpers';
import LoginForm from '../../../components/Admin/Layout/Wrapper/Pages/Components/Form/Login';

import './styles.css';

class index extends Component {
  state = {
    email: '',
    password: '',
    validEmail: null,
    validPassword: null,

    loginFailed: false,
    passwordSecure: true
  };

  onInputEmailChange = event => {
    const email = event.target.value;
    this.setState(prevState => ({
      email,
      validEmail: isValidEmail(email),
      loginFailed: false
    }));
  };

  onInputPasswordChange = event => {
    const password = event.target.value;
    this.setState({
      password,
      validPassword: isValidPassword(password),
      loginFailed: false
    });
  };

  onPasswordSecureHandler = () => {
    this.setState(prevState => ({
      passwordSecure: !prevState.passwordSecure
    }));
  };

  loginSubmitHandler = e => {
    e.preventDefault();
    this.props.authStartLogIn({
      email: this.state.email,
      password: this.state.password
    });
  };
  render() {
    return (
      <Fragment>
        <div className="container h-100">
          <div className="d-flex flex-row h-100">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <LoginForm
                {...this.state}
                onInputEmailChange={this.onInputEmailChange}
                onInputPasswordChange={this.onInputPasswordChange}
                loginSubmitHandler={this.loginSubmitHandler}
                onPasswordSecureHandler={this.onPasswordSecureHandler}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  authStartLogIn: loginData => dispatch(authStartLogIn(loginData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(index, axios));
