import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../../helpers';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => {
      return isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/admin/login" />
      );
    }}
  />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: isAuthenticated(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
