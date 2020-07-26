import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../../helpers/axios.config';

import withErrorHandler from '../../../hoc/withErrorHandler';

import Layout from '../../../components/Admin/Layout';
import { usersFetchStart } from '../../../store/actions/admin/users.action';

class index extends Component {
  componentDidMount() {
    this.props.usersFetchStart();
  }

  render() {
    return (
      <Fragment>
        <Layout page="users" />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.current.data
  };
};

const mapDispatchToProps = dispatch => ({
  usersFetchStart: () => dispatch(usersFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(index, axios));
