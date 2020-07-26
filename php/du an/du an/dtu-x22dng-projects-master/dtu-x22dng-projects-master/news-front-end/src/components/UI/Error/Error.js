import React from 'react';
import './Error.css';
const Error = props => {
  return (
    <div className={'Error'}>
      <div className="Error__title">
        <h3>something went wrong !!!</h3>
      </div>
      <div className="Error__content">{props.error}</div>
      <div className="Error_note">
        <i>
          Please contact via email to{' '}
          <a href="mailto:nam@autointegrity.com.au?subject=[Pageworth] Feedback">
            <b>nam@autointegrity.com.au</b>
          </a>{' '}
          to get more information
        </i>
      </div>
      <div className="Error__action mt-3 d-flex justify-content-center">
        <button
          className="btn btn-danger text-uppercase"
          onClick={props.clicked}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Error;
