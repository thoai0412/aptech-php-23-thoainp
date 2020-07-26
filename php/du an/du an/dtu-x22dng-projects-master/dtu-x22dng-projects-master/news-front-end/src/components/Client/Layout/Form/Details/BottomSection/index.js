import React from 'react';
import FakeLink from '../../../../../Details/FakeLink';
const index = props => {
  return (
    <div className="d-flex flex-column align-items-end text-muted border-top">
      <FakeLink>Forget Password ?</FakeLink>
      <FakeLink clicked={props.onClicked}>{props.children}</FakeLink>
    </div>
  );
};

export default index;
