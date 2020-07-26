import React, { Component } from 'react';
import { connect } from 'react-redux';
import Picture from '../../../../components/UI/Picture';

import Button from '../../../UI/Button';
import { authStartLogOut } from '../../../../store/actions/admin/auth.action';
import { logoImage } from '../../../../helpers';

class NavigationBar extends Component {
  onButtonClickHandler = () => {
    this.props.authStartLogOut();
  };

  render() {
    return (
      <div className="container-fluid p-0 bg-dark Admin__Navigation-Bar">
        <div className="d-flex flex-row h-100">
          <div className="col-4 d-flex justify-content-start align-items-center">
            <Picture
              src={logoImage()}
              alt="Crashzone"
              className="Admin__Navigation-Bar__img--height"
            />
            {/* <h1 className="text-white">Sharing & Learning</h1> */}
          </div>
          <div className="col-8 d-flex justify-content-end align-items-center my-2">
            <Button
              clicked={this.onButtonClickHandler}
              className="btn btn-danger rounded-0"
            >
              log out
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authStartLogOut: () => dispatch(authStartLogOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavigationBar);
