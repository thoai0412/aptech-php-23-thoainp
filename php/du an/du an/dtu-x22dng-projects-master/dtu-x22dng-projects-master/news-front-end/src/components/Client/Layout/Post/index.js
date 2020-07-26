import React from 'react';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import { logoImage, hrefArticle } from '../../../../helpers';
import LinkToArticle from '../../../UI/LinkToArticle';
import { HOST } from '../../../../helpers/constants';
const index = props => {
  const imageStyle = {
    backgroundImage: `url(${(!!props.images[0] &&
      `${HOST + props.images[0].path}`) ||
      logoImage()})`
  };
  return (
    <div className="card my-3">
      <LinkToArticle slug={props.slug}>
        <div
          className="Client__Article__Preview-Image card-img-top p-3"
          style={imageStyle}
        />
      </LinkToArticle>
      <div className="card-body border-top d-flex flex-column justify-content-between">
        <h2 className="card-title">
          <span data-tip={props.title} data-delay-show={1000}>
            <a href={hrefArticle(props.slug)} className="text-dark">
              {props.title}
            </a>
          </span>
          <ReactTooltip />
        </h2>

        <span data-tip={props.description} data-delay-show={1000}>
          <hr />
          <p className="card-text text-truncate align-self-end">
            {props.description}
          </p>
        </span>
        <ReactTooltip />
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <small className="text-muted d-flex flex-column">
          <b>{props.author.email}</b>
          <span>{moment(props.created_at).format('ll')}</span>
        </small>
        <small className="align-self-end Client__Articles__Read-More--font-size">
          <LinkToArticle slug={props.slug} className="">
            Read More&nbsp;&raquo;
          </LinkToArticle>
        </small>
      </div>
    </div>
  );
};

export default index;
