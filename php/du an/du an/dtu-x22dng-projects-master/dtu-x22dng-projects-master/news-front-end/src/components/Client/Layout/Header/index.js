import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import Brand from '../../../UI/Brand';
import NavigationBar from './NavigationBar';

import { menusFetchStart } from '../../../../store/actions/menus.action';

class index extends Component {
  componentDidMount() {
    if (this.props.menus.length === 0) {
      this.props.menusFetchStart();
    }
  }

  render() {
    return (
      <header className="container Header">
        <div className="row">
          <div className="d-none d-md-flex col-md-2 px-0 align-items-center">
            <a className=" btn btn-outline-danger text-uppercase">
              sign up now
            </a>
          </div>
          <div className="col-12 px-0 col-md-8 d-flex justify-content-between justify-content-md-center align-items-center">
            <a className="btn px-0">
              <h1 className="text-center text-success ">SHARING & LEARNING</h1>
            </a>
            <div className="d-block d-md-none">
              <button
                type="button"
                className="btn btn-sm btn-outline-success border"
                id="js-navigation-button"
              >
                <i className="fas fa-bars" />
              </button>
            </div>
          </div>
          <div className="d-none d-md-flex px-0 col-md-2 align-items-center justify-content-end">
            <a>
              <i className="fas fa-search mr-3 text-muted" />
            </a>
            <a className=" btn btn-outline-success text-uppercase">sign in</a>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    menus: state.menus
  };
};

const mapDispatchToProps = dispatch => ({
  menusFetchStart: () => dispatch(menusFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
