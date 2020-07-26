import React from 'react';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';

import LinkToArticle from '../../../../../../../UI/LinkToArticle';

import { imageFallBack } from '../../../../../../../../helpers/image';

const index = props => {
  // const urlImage = _ => {
  //   return (
  //     (props.images[0] && DOMAIN + props.images[0].path) || DOMAIN + logoImage()
  //   );
  // };
  return (
    <div className={['card my-2 my-md-3', props.className].join(' ')}>
      <div
        className="card-img-top Post__Background-Image"
        style={{
          backgroundImage: `url(${imageFallBack(props.images)})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          height: '200px'
        }}
      />
      <div className="card-body">
        <h2 className="card-title text-truncate">
          <span data-tip={props.title} data-delay-show={1000}>
            {props.title}
          </span>
          <ReactTooltip />
          &nbsp;-{' '}
          <span className="card-text text-muted text-lowercase ">
            {props.description}
          </span>
        </h2>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <small className="text-muted">
          <b>{props.author.name}</b> - {moment(props.created_at).format('ll')}
        </small>
        <small>
          <LinkToArticle slug={props.slug} className="float-right tex-muted">
            Read More&nbsp;&raquo;
          </LinkToArticle>
        </small>
      </div>
    </div>
  );
};

export default index;
