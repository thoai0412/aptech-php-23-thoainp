import React from 'react';
import { renderTypeString } from '../../../../../../../../helpers';
import Button from '../../../../../../../UI/Button';

const index = props => {
  return (
    <div className="form-group d-flex justify-content-between border-bottom p-2 m-0">
      <h3 className="text-uppercase font-weight-bold">
        {props.page} - {renderTypeString(props.type)}
      </h3>

      <Button
        type="reset"
        className="btn btn-sm btn-warning mx-1"
        clicked={props.onResetButtonClick}
      >
        reset
      </Button>
    </div>
  );
};

export default index;
