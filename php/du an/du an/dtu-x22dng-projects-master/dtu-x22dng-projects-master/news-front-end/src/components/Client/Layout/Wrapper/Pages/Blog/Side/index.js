import React, { Fragment } from 'react';
import Search from './Search';
import Tags from './Tags';

import FormLogin from './Form/Login';

const index = props => {
  return (
    <Fragment>
      <FormLogin onButtonSignUpClicked={props.onButtonSignUpClicked} />
      <Search />

      <Tags />
    </Fragment>
  );
};

export default index;
