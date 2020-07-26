import React, { Fragment } from 'react';

import Main from './Main';
import Side from './Side';

const index = props => {
  return (
    <Fragment>
      <div className="container my-lg-5">
        <div className="row">
          <div className="col-12 col-lg-8">
            <Main categorySlug={props.categorySlug} />
          </div>
          <div className="d-none d-lg-block col-lg-4">
            <Side onButtonSignUpClicked={props.onButtonSignUpClicked} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
