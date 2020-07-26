import React from 'react';

const index = props => {
  return (
    <div className="form-group row">
      <label className="col-2 col-form-label" htmlFor={props.name}>
        {props.name}:{' '}
      </label>
      <div className="col-10">
        <input
          className="form-control"
          type="text"
          defaultValue={props.value}
          onChange={props.changed}
          name={props.name}
        />
      </div>
    </div>
  );
};

export default index;
