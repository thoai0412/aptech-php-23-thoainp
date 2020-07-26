import React, { Component, Fragment } from 'react';

import ClientLayout from '../../../components/Client/Layout';

class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <ClientLayout page="blog" />
      </Fragment>
    );
  }
}

export default index;
