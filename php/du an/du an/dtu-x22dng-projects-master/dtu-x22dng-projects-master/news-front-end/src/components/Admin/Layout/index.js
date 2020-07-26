import React, { Fragment } from 'react';
import NavigatorBar from './NavigationBar';

import Wrapper from './Wrapper';

class index extends React.Component {
  render() {
    return (
      <Fragment>
        <NavigatorBar />
        <Wrapper {...this.props} page={this.props.page} />
      </Fragment>
    );
  }
}

export default index;
