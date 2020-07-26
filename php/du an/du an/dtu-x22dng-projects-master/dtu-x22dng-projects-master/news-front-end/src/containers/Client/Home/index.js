import React, { Component, Fragment } from 'react';

import ClientLayout from '../../../components/Client/Layout';
import { CLIENT_PAGES_NAME } from '../../../helpers/constants';
class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <ClientLayout
          page={CLIENT_PAGES_NAME.HOME}
          isScroll={this.props.isScroll}
        />
      </Fragment>
    );
  }
}

export default index;
