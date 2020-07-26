import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import Header from '../Components/Header';
import List from '../Components/List';
import ListOld from '../Components/ListOld';

import './styles.css';

import {
  categoryDeleteStart,
  categoriesDeletedFetchStart,
  categoryDeletePermanentlyStart,
  categoryDeletedRestoreStart
} from '../../../../../../store/actions/admin/categories.action';

import Title from '../Components/Title';
import Button from '../../../../../UI/Button';
import Icon from '../../../../../UI/Icon';
import {
  iconClass,
  displayStringTemporary,
  hideStringTemporary
} from '../../../../../../helpers';
import FormCategory from '../Components/Form/Category';
import {
  CATEGORY_CREATE_START,
  CATEGORY_EDIT_START
} from '../../../../../../helpers/constants';
const index = class extends Component {
  state = {
    displayOldData: false,
    categoryFormEdit: null
  };

  onButtonFetchDeletedCategories = () => {
    this.props.categoriesDeletedFetchStart();
    this.setState(prev => ({
      displayOldData: !prev.displayOldData
    }));
  };

  onButtonDeleteClickHandler = id => {
    this.props.categoryDeleteStart(id);
  };

  onButtonDeletePermanentlyClickHandler = id => {
    this.props.categoryDeletePermanentlyStart(id);
  };

  onButtonRestoreClickHandler = id => {
    this.props.categoryDeletedRestoreStart(id);
  };

  onButtonEditClickHandler = category => {
    this.setState(prevState => ({
      ...prevState,
      categoryFormEdit: {
        ...category,
        isValidName: null,
        saveButtonClicked: false
      }
    }));
    this.props.onFormEditToggleClicked(true);
  };

  render() {
    return (
      <div className="mt-5 border border-style-custom ">
        <div className="d-flex justify-content-between align-items-center border-bottom p-3">
          <Title className="mb-0">{this.props.page}</Title>
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

        {this.props.formToggle && (
          <div>
            <FormCategory
              type={CATEGORY_CREATE_START}
              page={this.props.page}
              onFormToggleClicked={this.props.onFormToggleClicked}
            />
          </div>
        )}

        {this.props.formEditToggle && (
          <div>
            <FormCategory
              type={CATEGORY_EDIT_START}
              page={this.props.page}
              onFormEditToggleClicked={this.props.onFormEditToggleClicked}
              categoryFormEdit={this.state.categoryFormEdit}
            />
          </div>
        )}

        <div className="m-3">
          <ul className="list-unstyled">
            <Header
              page={this.props.page}
              // className={
              //   this.props.categories.length === 0 ? '' : 'border-bottom-0'
              // }
            />
            {this.props.categories &&
              Object.keys(this.props.categories).map((key, index) => {
                return (
                  <Fragment key={this.props.categories[key].id}>
                    <List
                      page={this.props.page}
                      index={++index}
                      last={index === this.props.categories.length}
                      onButtonDeleteClicked={id =>
                        this.onButtonDeleteClickHandler(
                          this.props.categories[key].id
                        )
                      }
                      onButtonEditClicked={_ => {
                        this.onButtonEditClickHandler(
                          this.props.categories[key]
                        );
                      }}
                      {...this.props.categories[key]}
                    />
                  </Fragment>
                );
              })}
            <li className="Categories-Content">
              <Button
                className="btn btn-sm btn-secondary rounded-0 my-2 text-uppercase"
                clicked={this.onButtonFetchDeletedCategories}
              >
                {this.state.displayOldData
                  ? hideStringTemporary('category')
                  : displayStringTemporary('category')}
              </Button>
            </li>
            {this.state.displayOldData &&
              this.props.categoriesDeleted &&
              Object.keys(this.props.categoriesDeleted).map((key, index) => {
                return (
                  <Fragment key={this.props.categoriesDeleted[key].id}>
                    <ListOld
                      page={this.props.page}
                      index={++index}
                      last={index === this.props.categoriesDeleted.length}
                      onButtonDeletePermanentlyClicked={id =>
                        this.onButtonDeletePermanentlyClickHandler(
                          this.props.categoriesDeleted[key].id
                        )
                      }
                      onButtonRestoreClicked={id =>
                        this.onButtonRestoreClickHandler(
                          this.props.categoriesDeleted[key].id
                        )
                      }
                      {...this.props.categoriesDeleted[key]}
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
    categories: state.categories.current.data,
    categoriesDeleted: state.categories.deleted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryDeleteStart: id => dispatch(categoryDeleteStart(id)),
    categoriesDeletedFetchStart: _ => dispatch(categoriesDeletedFetchStart()),
    categoryDeletePermanentlyStart: id =>
      dispatch(categoryDeletePermanentlyStart(id)),
    categoryDeletedRestoreStart: id => dispatch(categoryDeletedRestoreStart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
