import React from 'react';
import Button from '../../../../../../../UI/Button';
const index = props => {
  return (
    <li
      className={[
        'Admin-Categories-Content d-flex flex-row justify-content-around border ',
        props.last ? 'border-bottom' : 'border-bottom-0'
      ].join(' ')}
    >
      <div>{props.index}</div>
      <div className="d-flex justify-content-start">
        <span className="px-2">{props.name}</span>
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
          delete permanently
        </Button>
      </div>
    </li>
  );
};

export default index;
