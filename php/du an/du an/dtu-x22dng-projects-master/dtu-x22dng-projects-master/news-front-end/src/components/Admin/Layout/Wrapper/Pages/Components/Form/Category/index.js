import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../../../../../UI/Button';
import HelpText from '../Details/HelpText';
import Input from '../Details/Input';
import {
  categoryCreateStart,
  categoryEditStart
} from '../../../../../../../../store/actions/admin/categories.action';
import { categoryForm } from '../../../../../../../../helpers/seed-data';
import {
  isValidName,
  addInputValidClass,
  helpTextRequire,
  renderTypeString,
  isCreateType
} from '../../../../../../../../helpers';

class index extends React.Component {
  state = {
    categoryForm: {
      ...categoryForm
    },
    categoryFormEdit: {
      ...this.props.categoryFormEdit
    }
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props.categoryFormEdit, nextProps.categoryFormEdit);
    return isCreateType(this.props.type)
      ? null
      : this.checkChangeFormEdit(nextProps);
  }

  checkChangeFormEdit = nextProps => {
    if (this.props.categoryFormEdit.id !== nextProps.categoryFormEdit.id) {
      this.setState(prevState => ({
        ...prevState,
        categoryFormEdit: {
          ...nextProps.categoryFormEdit
        }
      }));
    } else {
      this.props.onFormEditToggleClicked();
    }
  };

  onInputNameChange = event => {
    const name = event.target.value;

    if (isCreateType(this.props.type)) {
      this.setState(prevState => ({
        categoryForm: {
          ...prevState.categoryForm,
          name,
          isValidName: isValidName(name)
        }
      }));
    } else {
      this.setState(prevState => ({
        categoryFormEdit: {
          ...prevState.categoryFormEdit,
          name,
          isValidName: isValidName(name)
        }
      }));
    }
  };

  onFormSubmitHandler = event => {
    event.preventDefault();
    if (isCreateType(this.props.type)) {
      const { name } = this.state.categoryForm;
      this.props.categoryCreateStart({ name });
    } else {
      const { name, id } = this.state.categoryFormEdit;
      this.props.categoryEditStart(id, { name });
    }
    this.onResetFormHandler();
  };

  onResetButtonClicked = () => {
    this.onResetFormHandler();
  };

  onResetFormHandler = () => {
    isCreateType(this.props.type)
      ? this.setState(prevState => ({
          categoryForm: {
            ...categoryForm
          }
        }))
      : this.setState(prevState => ({
          categoryFormEdit: {
            ...categoryForm
          }
        }));
  };

  render() {
    return (
      <form
        onSubmit={this.onFormSubmitHandler}
        className="Admin__Wrapper__Category__Form border rounded-0 p-3 pb-0 m-3"
      >
        <div className="form-group d-flex justify-content-between border-bottom p-2 m-0">
          <h5 className="text-uppercase">
            {renderTypeString(this.props.type)} category form
          </h5>
          <Button
            type="reset"
            className="btn-sm btn-warning mx-1"
            clicked={this.onResetButtonClicked}
          >
            reset
          </Button>
        </div>

        <div className="form-group mb-0">
          <HelpText className="Admin__Wrapper__Category__Form__notice--height mb-2">
            {(isCreateType(this.props.type)
              ? this.state.categoryForm.isValidName !== null &&
                !this.state.categoryForm.isValidName
              : this.state.categoryFormEdit.isValidName !== null &&
                !this.state.categoryFormEdit.isValidName) &&
              helpTextRequire(
                'category name',
                'alphabet and at least 3 characters'
              )}
          </HelpText>
          <div className="input-group">
            <Input
              type="text"
              className={[
                'form-control',
                addInputValidClass(
                  isCreateType(this.props.type)
                    ? this.state.categoryForm.isValidName
                    : this.state.categoryFormEdit.isValidName
                )
              ].join(' ')}
              placeholder="Name Category ..."
              value={
                isCreateType(this.props.type)
                  ? this.state.categoryForm.name
                  : this.state.categoryFormEdit.name
              }
              onChange={this.onInputNameChange}
              autoFocus
            />
          </div>
        </div>

        <div className="form-group d-flex justify-content-end mt-3">
          <Button
            type="submit"
            className={`btn-sm btn-success mx-1 ${
              isCreateType(this.props.type)
                ? !this.state.categoryForm.isValidName
                : !this.state.categoryFormEdit.isValidName
                  ? 'cursor-not-allowed'
                  : ''
            }`}
            disabled={
              isCreateType(this.props.type)
                ? !this.state.categoryForm.isValidName
                : !this.state.categoryFormEdit.isValidName
            }
          >
            {renderTypeString(this.props.type)}
          </Button>
          <Button
            type="button"
            className="btn-sm btn-danger mx-1"
            clicked={
              isCreateType(this.props.type)
                ? this.props.onFormToggleClicked
                : this.props.onFormEditToggleClicked
            }
          >
            cancel
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryCreateStart: data => dispatch(categoryCreateStart(data)),
    categoryEditStart: (id, category) =>
      dispatch(categoryEditStart(id, category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
