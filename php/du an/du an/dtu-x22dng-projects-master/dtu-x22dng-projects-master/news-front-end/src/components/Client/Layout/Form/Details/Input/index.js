import React from 'react';

const index = props => {
  return (
    <div className="input-group">
      <div className="input-group-prepend w-25">
        <span className="Client__Form__form--font-size input-group-text w-100 text-uppercase rounded-0">
          {props.name}
        </span>
      </div>
      <input
        type={props.type}
        className={['form-control rounded-0', props.className].join(' ')}
        value={props.value}
        id={props.name}
        placeholder={`${props.name} ...`}
        aria-label={props.name}
        aria-describedby="basic-addon1"
        onChange={props.onInputChange}
      />
    </div>
  );
};

export default index;
