import React from 'react';
import Button from '../../../../../Details/Button';
const index = props => {
  return (
    <div className="d-flex justify-content-center py-3 border-top">
      <Button
        type="submit"
        className={`btn btn-sm btn-success mx-2 text-uppercase ${
          !!!props.isSaveButtonAllowed ? 'cursor-not-allowed' : ''
        }`}
        disabled={!!!props.isSaveButtonAllowed}
      >
        {props.children}
      </Button>
      <Button
        type="button"
        clicked={props.onClicked}
        className="btn btn-danger mx-2 text-uppercase"
      >
        cancel
      </Button>
    </div>
  );
};

export default index;
