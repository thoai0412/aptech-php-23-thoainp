import React from 'react';
import Icon from '../../../../../../../../UI/Icon';
import { iconClass, fontAwesomeType } from '../../../../../../../../../helpers';
import Button from '../../../../../../../../UI/Button';

const index = props => {
  return (
    <figure
      className={[
        ' figure mx-2 my-0',
        props.main ? 'border border-danger' : ''
      ].join(' ')}
    >
      <div className="h-100 d-flex flex-column justify-content-between">
        {!props.main && (
          <Button
            clicked={props.onClickedMakeMainImage}
            className="btn btn-sm btn-secondary rounded-0 mb-2"
          >
            Main Preview
          </Button>
        )}
        <img
          src={props.src}
          className="figure-img rounded-0 my-auto w-100"
          alt={props.alt}
          width={props.width}
        />
        <figcaption className="figure-caption text-truncate text-center mt-auto">
          <span
            className="cursor-pointer px-2"
            onClick={props.onClickedRemoveImage}
          >
            <Icon iconClass={iconClass(fontAwesomeType.TIMES)} />
          </span>
          {props.caption}
        </figcaption>
        <Button
          clicked={_ => props.onAddToEditorButtonClicked()}
          className="btn btn-sm btn-secondary rounded-0"
        >
          Add To Editor
        </Button>
      </div>
    </figure>
  );
};

export default index;
