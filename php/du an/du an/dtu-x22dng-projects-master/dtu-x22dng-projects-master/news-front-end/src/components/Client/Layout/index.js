import { connect } from 'react-redux';
import React, { Fragment } from 'react';

import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import Navigation from './Navigation';
import ScrollTop from './ScrollTop';
import withErrorHandler from '../../../hoc/withErrorHandler';
import Wrapper from './Wrapper';

import { informationFetchStart } from '../../../store/actions/information.action';
import axios from '../../../helpers/axios.config';

class index extends React.Component {
  state = {
    signUpForm: false,
    logInForm: false
  };
  componentDidMount() {
    if (this.props.information.length === 0) {
      this.props.informationFetchStart();
    }
    if (!!localStorage.getItem('cz.visited')) {
      const countVisited = parseInt(localStorage.getItem('cz.visited'), 10);
      if (countVisited < 2) {
        localStorage.setItem('cz.visited', '' + (countVisited + 1));
      } else {
        Math.random() * 10 > 8 && localStorage.setItem('cz.visited', '1');
      }
    } else {
      localStorage.setItem('cz.visited', '1');
    }
  }

  onButtonScrollTopClickHandler = () => {
    window.scrollTo(0, 0);
  };

  onButtonSignUpClickHandler = _ => {
    this.setState(prevState => ({
      signUpForm: !prevState.signUpForm,
      logInForm: false
    }));
  };

  onButtonLogInClickHandler = _ => {
    this.setState(prevState => ({
      signUpForm: false,
      logInForm: !prevState.logInForm
    }));
  };

  onEscapeButtonPressHandler = () => {
    this.setState({
      signUpForm: false,
      logInForm: false
    });
  };

  render() {
    return (
      <Fragment>
        {' '}
        {this.state.signUpForm && (
          <Form
            type="signup"
            onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
            onEscapeButtonPressed={_ => this.onEscapeButtonPressHandler()}
            onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
          />
        )}{' '}
        {this.state.logInForm && (
          <Form
            type="login"
            onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
            onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
            onEscapeButtonPressed={_ => this.onEscapeButtonPressHandler()}
          />
        )}{' '}
        {this.props.information.length > 0 && (
          <Header
            onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
            onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
            information={this.props.information}
          />
        )}
        <Navigation />
        <Wrapper
          {...this.props}
          onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
          onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
        />{' '}
        {this.props.information.length > 0 && (
          <Footer
            onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
            onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
            information={this.props.information}
          />
        )}{' '}
        <ScrollTop clicked={_ => this.onButtonScrollTopClickHandler()} />{' '}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    information: state.information
  };
};
const mapDispatchToProps = dispatch => {
  return {
    informationFetchStart: () => dispatch(informationFetchStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(index, axios));
