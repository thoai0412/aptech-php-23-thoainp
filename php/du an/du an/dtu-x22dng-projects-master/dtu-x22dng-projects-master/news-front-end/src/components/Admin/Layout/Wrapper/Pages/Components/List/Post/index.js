import React, { Fragment } from 'react';
import Button from '../../../../../../../UI/Button';
import { imageFallBack } from '../../../../../../../../helpers/image';
import { connect } from 'react-redux';
import { postUpdateStart } from '../../../../../../../../store/actions/posts.action';
import { DOMAIN } from '../../../../../../../../helpers/constants';
class index extends React.Component {
  statusUpdate = event => {
    const status = event.target.checked ? 'publish' : 'draft';
    let formData = new FormData();
    const post = {
      id: this.props.id,
      status
    };
    formData.append('post', JSON.stringify(post));
    formData.append('_method', 'PUT');
    this.props.postUpdateStart(post.id, formData);
  };

  onPreviewClickHandler = slug => {
    window.open(`${DOMAIN}/blog/posts/${slug}`);
  };
  render() {
    return (
      <Fragment>
        <div className="font-weight-bold">{this.props.index}</div>
        <div className="d-flex justify-content-start font-weight-bold">
          <span className="px-2">{this.props.title}</span>
        </div>
        <div className="d-flex justify-content-start">
          <span className="px-2">{this.props.description}</span>
        </div>
        <div className="d-flex justify-content-center">
          <span className="px-2">{this.props.author.email}</span>
        </div>
        <div className="d-flex justify-content-center Admin__Wrapper__List__Post--status">
          <input
            className="tgl tgl-ios"
            id={`js-${this.props.id}`}
            type="checkbox"
            onChange={event => this.statusUpdate(event)}
            defaultChecked={this.props.status === 'publish' ? true : false}
          />
          <label className="tgl-btn" htmlFor={`js-${this.props.id}`} />
        </div>
        <div className="d-flex justify-content-center">
          <img src={imageFallBack(this.props.images)} className="w-50" alt="" />
        </div>
        <div className="d-flex justify-content-center">
          {this.props.categories.map((category, index) => {
            return (
              <span className="px-2" key={category.slug}>
                {category.name}
              </span>
            );
          })}
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

const mapDispatchToProps = dispatch => ({
  postUpdateStart: (id, post) => dispatch(postUpdateStart(id, post))
});

export default connect(
  null,
  mapDispatchToProps
)(index);
