import React, { Fragment } from 'react';
import Button from '../../../../../../../UI/Button';
import { DOMAIN } from '../../../../../../../../helpers/constants';
class index extends React.Component {
  onPreviewClickHandler = slug => {
    window.open(`${DOMAIN}/blog/categories/${slug}`);
  };
  render() {
    return (
      <Fragment>
        <div className="font-weight-bold">{this.props.index}</div>
        <div className="d-flex justify-content-start">
          <span className="px-2">{this.props.name}</span>
        </div>
        <div className="d-flex justify-content-center">
          <span className="px-2">{this.props.posts_count}</span>
        </div>
        <div className="d-flex justify-content-around">
          <Button
            className="btn btn-sm btn-info"
            clicked={_ => this.onPreviewClickHandler(this.props.slug)}
          >
            preview
          </Button>
          <Button
            className="btn btn-sm btn-warning"
            clicked={this.props.onButtonEditClicked}
          >
            edit
          </Button>
          <Button
            className="btn btn-sm btn-danger"
            clicked={this.props.onButtonDeleteClicked}
          >
            delete
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default index;
