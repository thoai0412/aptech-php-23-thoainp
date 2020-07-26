import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { postFetchStart } from '../../../../../../store/actions/post.action';

import Article from './Article';
import Side from './Side';

import Post from '../../../Post';
class index extends Component {
  componentDidMount() {
    this.props.postFetchStart(this.props.slug);
  }
  render() {
    return (
      <Fragment>
        {Object.keys(this.props.post).length > 0 && (
          <div className="container my-5">
            <div className="row border-bottom">
              <div className="col-8 d-flex flex-column">
                <Article {...this.props.post} />
              </div>
              <div className="col-4">
                <Side categories={this.props.post.categories} />
              </div>
            </div>
            <div className="mt-5">
              <div className="card-deck">
                {/* {Object.keys(this.props.post.related_posts).map(
                  (key, index) => {
                    const post = this.props.post.related_posts[key];
                    return <Post {...post} key={key} />;
                  }
                )} */}
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => ({
  postFetchStart: slug => dispatch(postFetchStart(slug))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
