import React from 'react';
import { logoImage } from '../../../../../../../../helpers';

const index = props => {
  return (
    <div className="card rounded-0 mb-3">
      <img className="card-img-top" src={logoImage()} alt="Card cap" />
    </div>
  );
};

export default index;
