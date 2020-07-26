import React, { Fragment } from 'react';
import moment from 'moment';
import // DEVELOPMENT_API_DOMAIN,
// DEVELOPMENT_DOMAIN
'../../../../../../../helpers/constants';
// import { logoImage } from '../../../../../../../helpers';
import Breadcrumb from '../../../../../../UI/Breadcrumb';
const index = props => {
  // const urlImage = _ => {
  //   return (
  //     (props.images[0] && DEVELOPMENT_API_DOMAIN + props.images[0].path) ||
  //     DEVELOPMENT_DOMAIN + logoImage()
  //   );
  // };
  return (
    <Fragment>
      <Breadcrumb data={['blog', 'post']} />
      <h1 className="text-uppercase font-weight-bold">{props.title}</h1>
      <div>
        <small className="d-inline text-muted font-italic">
          By {props.author.name} on {moment(props.updated_at).format('LLLL')}
        </small>
      </div>
      <p className="text-muted font-italic">{props.description}</p>
      {/* {props.images[0] && (
        <Fragment>
          <figure className="figure">
            <img
              src={urlImage()}
              className="figure-img rounded-0 my-auto w-100"
              alt={props.images[0].alt}
            />
            <figcaption className="figure-caption text-truncate text-center mt-auto">
              {props.images[0].name}
            </figcaption>
          </figure>
        </Fragment>
      )} */}
      <div
        className="Client__Post__Article Client__Post__Article--font-family d-flex flex-column"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
      <div className="mt-auto border-top d-flex justify-content-between">
        <a href="">&lt;&nbsp;Previous</a>
        <a href="">Next&nbsp;&gt;</a>
      </div>
    </Fragment>
  );
};

export default index;
