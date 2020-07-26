import React, { Component, Fragment } from 'react';

import ClientLayout from '../../../components/Client/Layout';
import { CLIENT_PAGES_NAME } from '../../../helpers/constants';

class index extends Component {
  render() {
    return (
      <Fragment>
        <ClientLayout
          categorySlug={this.props.match.params.categorySlug}
          page={CLIENT_PAGES_NAME.CATEGORY}
        />
      </Fragment>
    );
  }
}

export default index;
