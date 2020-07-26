import React, { Fragment } from 'react';
import Picture from '../../Details/Picture';
import { logoImage } from '../../../helpers';
import { Link } from 'react-router-dom';
const index = props => {
  return (
    <Fragment>
      <Link to="/home" className="Client__Brand__anchor">
        <div className="d-flex justify-content-center">
          <Picture
            className={['Client__Brand__img--height align-self-center'].join(
              ' '
            )}
            src={logoImage()}
          />
          <div className="d-flex flex-column ml-3 justify-content-center w-100">
            <span
              className={[
                'Client__Brand__Name text-uppercase',
                props.textColor
              ].join(' ')}
            >
              {props.link}
            </span>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default index;
