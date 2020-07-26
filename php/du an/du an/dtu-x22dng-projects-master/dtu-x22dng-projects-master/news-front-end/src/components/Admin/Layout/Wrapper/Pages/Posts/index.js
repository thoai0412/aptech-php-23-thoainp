import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import Pagination from '../../../../../UI/Pagination';
import {
  postDeleteStart,
  postsDeletedFetchStart,
  postDeletePermanentlyStart,
  postDeletedRestoreStart,
  postsLinkFetchStart
} from '../../../../../../store/actions/posts.action';
import FormPost from '../Components/Form/Post';
import {
  iconClass,
  displayStringTemporary,
  hideStringTemporary,
  isValidTitle,
  isValidDescription
} from '../../../../../../helpers';
import {
  POST_CREATE_START,
  POST_UPDATE_START
} from '../../../../../../helpers/constants';

import Title from '../Components/Title';
import Button from '../../../../../UI/Button';
import Icon from '../../../../../UI/Icon';
import Header from '../Components/Header';
import ListPosts from '../Components/List';
import ListOldPosts from '../Components/ListOld/Post';
import { categoriesFetchStart } from '../../../../../../store/actions/admin/categories.action';

const index = class extends Component {
  state = {
    displayOldData: false,
    postFormEdit: null
  };

  componentDidMount() {
    if (this.props.categories.length === 0) {
      this.props.categoriesFetchStart();
    }
  }

  onButtonDeleteClickHandler = id => {
    this.props.postDeleteStart(id);
  };
  onButtonFetchDeletedPosts = () => {
    this.props.postsDeletedFetchStart();
    this.setState(prev => ({
      displayOldData: !prev.displayOldData
    }));
  };

  onButtonDeletePermanentlyClickHandler = id => {
    this.props.postDeletePermanentlyStart(id);
  };

  onButtonRestoreClickHandler = id => {
    this.props.deletedRestoreStart(id);
  };

  onButtonEditClickHandler = post => {
    const { id, title, description, content, categories, images } = post;
    this.setState(prevState => {
      return {
        ...prevState,
        postFormEdit: {
          id,
          title,
          isValidTitle: isValidTitle(title),
          description,
          isValidDescription: isValidDescription(description),
          content,
          categories,
          images
        }
      };
    });
    this.props.onFormEditToggleClicked(true);
  };

  onPagniateClickHandler = link => {
    return this.props.postsLinkFetchStart(link);
  };

  render() {
    return (
      <div className="mt-5 border border-style-custom ">
        <div className="d-flex justify-content-between align-items-center border-bottom p-3">
          <Title className="mb-0 font-weight-bold">{this.props.page}</Title>
          <Button
            className="btn-sm btn-info"
            clicked={this.props.onFormToggleClicked}
          >
            <Icon
              iconClass={iconClass(this.props.formToggle ? 'minus' : 'plus')}
              className="text-white"
            />
          </Button>
        </div>

        {/* form create */}
        {this.props.formToggle && (
          <div>
            <FormPost
              type={POST_CREATE_START}
              page={this.props.page}
              onFormToggleClicked={this.props.onFormToggleClicked}
              categories={this.props.categories}
            />
          </div>
        )}

        {/* form edit */}
        {this.props.formEditToggle && (
          <div>
            <FormPost
              type={POST_UPDATE_START}
              page={this.props.page}
              onFormEditToggleClicked={this.props.onFormEditToggleClicked}
              postFormEdit={this.state.postFormEdit}
              categories={this.props.categories}
            />
          </div>
        )}

        <div className="m-3">
          <ul className="list-unstyled">
            <Header
              page={this.props.page}
              className={!!this.props.posts ? '' : 'border-bottom-0'}
            />

            {this.props.posts.data &&
              Object.keys(this.props.posts.data).map((key, index) => {
                const post = this.props.posts.data[key];
                return (
                  <Fragment key={post.id}>
                    <ListPosts
                      page={this.props.page}
                      index={index + 1}
                      last={index === this.props.posts.data.length - 1}
                      onButtonDeleteClicked={_ =>
                        this.onButtonDeleteClickHandler(post.id)
                      }
                      onButtonEditClicked={_ => {
                        this.onButtonEditClickHandler(post);
                      }}
                      {...post}
                    />
                  </Fragment>
                );
              })}
            <li className="Admin__Wrapper__Posts__List py-2">
              <Pagination
                onPaginateClicked={link => this.onPagniateClickHandler(link)}
                {...this.props.posts}
              />
            </li>
            <li className="Admin__Wrapper__Posts__List">
              <Button
                className="btn btn-sm btn-secondary rounded-0 my-2 text-uppercase"
                clicked={this.onButtonFetchDeletedPosts}
              >
                {this.state.displayOldData
                  ? hideStringTemporary('posts')
                  : displayStringTemporary('posts')}
              </Button>
            </li>
            {this.state.displayOldData &&
              this.props.postsDeleted &&
              Object.keys(this.props.postsDeleted).map((key, index) => {
                const post = this.props.postsDeleted[key];
                return (
                  <Fragment key={post.id}>
                    <ListOldPosts
                      page={this.props.page}
                      index={++index}
                      last={index === this.props.postsDeleted.length}
                      onButtonDeletePermanentlyClicked={id =>
                        this.onButtonDeletePermanentlyClickHandler(post.id)
                      }
                      onButtonRestoreClicked={id =>
                        this.onButtonRestoreClickHandler(post.id)
                      }
                      {...post}
                    />
                  </Fragment>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    categories: state.categories.current,
    postsDeleted: state.posts.deleted,
    posts: state.posts.current
    // next: state.posts.current.next_page_url,
    // prev: state.posts.current.prev_page_url,
    // currentPage: state.posts.current.current_page,
    // lastPage: state.posts.current.last_page,
    // lastPageUrl: state.posts.current.last_page_url,
    // firstPageUrl: state.posts.current.first_page_url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postDeleteStart: id => dispatch(postDeleteStart(id)),
    postsDeletedFetchStart: _ => dispatch(postsDeletedFetchStart()),
    postDeletePermanentlyStart: id => dispatch(postDeletePermanentlyStart(id)),
    deletedRestoreStart: id => dispatch(postDeletedRestoreStart(id)),
    categoriesFetchStart: _ => dispatch(categoriesFetchStart()),
    postsLinkFetchStart: link => dispatch(postsLinkFetchStart(link))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
