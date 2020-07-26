import React from 'react';
import Picture from '../../../Details/Picture';

import Button from '../../../Details/Button';
const index = props => {
  return (
    <div className="container-fluid px-0 Banner">
      <div className="d-flex flex-row">
        <div className="col-12 px-0">
          <Picture
            src={props.bannerImage}
            className="w-100 img-fluid Banner__image"
          />
          <div className="Banner__text">
            <h1 className="text-uppercase text-white">{props.title}</h1>
            <small className="text-uppercase text-white">
              THE FIRST FREE WEB BASED QUOTING SYSTEM FOR SMASH REPAIRERS
            </small>
            <br />
            <Button className="btn btn-outline-dark bg-yellow-cz-custom rounded-0 text-dark text-uppercase mt-3 font-weight-bold">
              sign up now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
