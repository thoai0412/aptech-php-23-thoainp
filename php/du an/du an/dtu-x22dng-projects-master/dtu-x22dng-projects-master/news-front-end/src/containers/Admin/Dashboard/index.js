import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../../helpers/axios.config';

import withErrorHandler from '../../../hoc/withErrorHandler';

import Layout from '../../../components/Admin/Layout';
import { ADMIN_PAGES_NAME } from '../../../helpers/constants';
import { informationFetchStart } from '../../../store/actions/information.action';

class index extends Component {
  componentDidMount() {
    if (this.props.information.length === 0) {
      this.props.fetchedStart();
    }
  }

  render() {
    return (
      <Fragment>
        <Layout {...this.props} page={ADMIN_PAGES_NAME.DASHBOARD} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    information: state.information
  };
};

const mapDispatchToProps = dispatch => ({
  fetchedStart: _ => dispatch(informationFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(index, axios));
