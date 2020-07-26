import React from 'react';
import Button from '../../../../../../../UI/Button';
const index = props => {
  return (
    <li
      className={[
        'Admin-Posts-Content d-flex flex-row justify-content-around border ',
        props.last ? 'border-bottom' : 'border-bottom-0'
      ].join(' ')}
    >
      <div className="font-weight-bold">{props.index}</div>
      <div className="d-flex justify-content-start font-weight-bold">
        <span className="px-2">{props.title}</span>
      </div>
      <div className="d-flex justify-content-start">
        <span className="px-2">{props.description}</span>
      </div>
      <div className="d-flex justify-content-around">
        <Button
          className="btn btn-sm btn-success mx-1"
          clicked={props.onButtonRestoreClicked}
        >
          restore
        </Button>
        <Button
          className="btn btn-sm btn-danger mx-1"
          clicked={props.onButtonDeletePermanentlyClicked}
        >
          delete permantly
        </Button>
      </div>
    </li>
  );
};

export default index;
