import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../../helpers/axios.config';

import withErrorHandler from '../../../hoc/withErrorHandler';

import { categoriesFetchStart } from '../../../store/actions/admin/categories.action';
import AdminLayout from '../../../components/Admin/Layout';

class index extends Component {
  componentDidMount() {
    this.props.categoriesFetchStart();
  }

  render() {
    return (
      <Fragment>
        <AdminLayout page="categories" />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.current
  };
};

const mapDispatchToProps = dispatch => ({
  categoriesFetchStart: () => dispatch(categoriesFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(index, axios));
