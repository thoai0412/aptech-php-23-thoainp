import React, { Fragment } from 'react';
import Button from '../../../../../../../UI/Button';
const index = props => {
  return (
    <Fragment>
      <div className="font-weight-bold">{props.index}</div>
      <div className="d-flex justify-content-start font-weight-bold">
        <span className="px-2">{props.name}</span>
      </div>
      <div className="d-flex justify-content-start">
        <span className="px-2">{props.email}</span>
      </div>
      <div className="d-flex justify-content-around">
        <Button
          className={[
            'btn btn-sm',
            props.type === 'old' ? 'btn-success' : 'btn-warning'
          ].join(' ')}
          clicked={
            props.type === 'old'
              ? props.onButtonRestoreClickHandler
              : props.onButtonEditClicked
          }
        >
          {props.type === 'old' ? 'restore' : 'edit'}
        </Button>
        <Button
          className="btn btn-sm btn-danger"
          clicked={
            props.type === 'old'
              ? props.onButtonDeletePermanentlyClicked
              : props.onButtonDeleteClicked
          }
        >
          {props.type === 'old' ? 'destroy' : 'delete'}
        </Button>
      </div>
    </Fragment>
  );
};

export default index;
