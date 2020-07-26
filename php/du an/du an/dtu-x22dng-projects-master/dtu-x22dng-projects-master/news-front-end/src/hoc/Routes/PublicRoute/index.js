import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../../helpers';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => {
      return isAuthenticated ? (
        <Redirect to="/admin/users" />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: isAuthenticated(state)
  };
};

export default connect(mapStateToProps)(PublicRoute);
