import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Button from '../../../../../../../UI/Button';
// import HelpText from '../Details/HelpText';
import HelpText from '../../../../../../../Details/HelpText';
import Input from '../Details/Input';
import {
  renderTypeString,
  passwordPlaceholderByType,
  isCreateType,
  helpTextRequire,
  addInputValidClass,
  isValidName,
  isValidEmail,
  isValidPassword,
  isEditType
} from '../../../../../../../../helpers';

import { userForm } from '../../../../../../../../helpers/seed-data';
import {
  userCreateStart,
  userEditStart
} from '../../../../../../../../store/actions/admin/users.action';
class index extends Component {
  state = {
    userForm: {
      ...userForm
    },
    userFormEdit: {
      ...this.props.userFormEdit
    },
    isSaveButtonAllowed: null,
    passwordSecured: true
  };

  onInputNameChanged = event => {
    const name = event.target.value;

    if (isCreateType(this.props.type)) {
      this.setState(prevState => {
        const isSaveButtonAllowed =
          !!isValidName(name) &&
          !!prevState.userForm.isValidEmail &&
          !!prevState.userForm.isValidPassword;

        return {
          userForm: {
            ...prevState.userForm,
            name,
            isValidName: isValidName(name)
          },
          isSaveButtonAllowed
        };
      });
    } else {
      this.setState(prevState => {
        const isSaveButtonAllowed = !!isValidName(name);
        return {
          userFormEdit: {
            ...prevState.userFormEdit,
            name,
            isValidName: isValidName(name)
          },
          isSaveButtonAllowed
        };
      });
    }
  };

  onInputEmailChanged = event => {
    const email = event.target.value;

    if (isCreateType(this.props.type)) {
      this.setState(prevState => {
        const isSaveButtonAllowed =
          !!isValidEmail(email) &&
          !!prevState.userForm.isValidName &&
          !!prevState.userForm.isValidPassword;

        return {
          userForm: {
            ...prevState.userForm,
            email,
            isValidEmail: isValidEmail(email)
          },
          isSaveButtonAllowed
        };
      });
    }
  };

  onInputPasswordChanged = event => {
    const password = event.target.value;

    if (isCreateType(this.props.type)) {
      this.setState(prevState => {
        const isSaveButtonAllowed =
          !!isValidPassword(password) &&
          !!prevState.userForm.isValidName &&
          !!prevState.userForm.isValidEmail;

        return {
          userForm: {
            ...prevState.userForm,
            password,
            isValidPassword: isValidPassword(password)
          },
          isSaveButtonAllowed
        };
      });
    }
  };

  onPasswordSecureClickHandler = () => {
    this.setState(prevState => {
      return {
        passwordSecured: !prevState.passwordSecured
      };
    });
  };

  onFormSubmitHandler = event => {
    event.preventDefault();
    if (this.state.isSaveButtonAllowed) {
      if (isCreateType(this.props.type)) {
        const { name, email, password } = this.state.userForm;
        this.props.createStart({ name, email, password });
        this.onResetFormHandler();
      } else {
        const { name, id } = this.state.userFormEdit;
        this.props.editStart(id, { name });
        this.props.onFormEditToggleClicked();
      }
    }
  };

  onResetButtonClicked = () => {
    this.onResetFormHandler();
  };

  onResetFormHandler = () => {
    isCreateType(this.props.type)
      ? this.setState(prevState => ({
          userForm: {
            ...userForm
          }
        }))
      : this.setState(prevState => ({
          userFormEdit: {
            ...userForm
          }
        }));
  };
  render() {
    return (
      <form
        onSubmit={this.onFormSubmitHandler}
        className="Admin__Wrapper__User__Form border rounded-0 p-3 pb-0 m-3"
      >
        <div className="form-group d-flex justify-content-between border-bottom p-2 m-0">
          <h5 className="text-uppercase">
            {renderTypeString(this.props.type)}
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
          <HelpText className="Admin__Wrapper__User__Form__notice--height mb-2">
            {(isCreateType(this.props.type)
              ? this.state.userForm.isValidName !== null &&
                !this.state.userForm.isValidName
              : this.state.userFormEdit.isValidName !== null &&
                !this.state.userFormEdit.isValidName) &&
              helpTextRequire(
                'user name',
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
                    ? this.state.userForm.isValidName
                    : this.state.userFormEdit.isValidName
                )
              ].join(' ')}
              placeholder="Name ..."
              value={
                isCreateType(this.props.type)
                  ? this.state.userForm.name
                  : this.state.userFormEdit.name
              }
              onChange={this.onInputNameChanged}
              autoFocus
            />
          </div>
        </div>

        <div className="form-group mb-0">
          <HelpText className="Admin__Wrapper__User__Form__notice--height m-0 mb-2">
            {this.state.userForm.isValidEmail !== null &&
              !this.state.userForm.isValidEmail &&
              helpTextRequire(
                'user email',
                'email format. E.g : nam@autointegrity.com.au'
              )}
          </HelpText>
          <div className="input-group">
            <Input
              type="email"
              className={[
                'form-control',
                addInputValidClass(
                  isCreateType(this.props.type)
                    ? this.state.userForm.isValidEmail
                    : this.state.userFormEdit.isValidEmail
                )
              ].join(' ')}
              placeholder="Email ..."
              onChange={this.onInputEmailChanged}
              value={
                isCreateType(this.props.type)
                  ? this.state.userForm.email
                  : this.state.userFormEdit.email
              }
              readOnly={isEditType(this.props.type)}
            />
          </div>
        </div>
        {isCreateType(this.props.type) && (
          <Fragment>
            <div className="form-group mb-0 ">
              <HelpText className="Admin__Wrapper__User__Form__notice--height m-0 mb-2">
                {(isCreateType(this.props.type)
                  ? this.state.userForm.isValidPassword !== null &&
                    !this.state.userForm.isValidPassword
                  : this.state.userFormEdit.isValidPassword !== null &&
                    !this.state.userFormEdit.isValidPassword) &&
                  helpTextRequire(
                    'user email',
                    'at least 5 ASCII characters. E.g : hello@123 '
                  )}
              </HelpText>
              <div className="input-group">
                <Input
                  type={this.state.passwordSecured ? 'password' : 'text'}
                  className={[
                    'form-control',
                    addInputValidClass(
                      isCreateType(this.props.type)
                        ? this.state.userForm.isValidPassword
                        : this.state.userFormEdit.isValidPassword
                    )
                  ].join(' ')}
                  placeholder={passwordPlaceholderByType(this.props.type)}
                  onChange={this.onInputPasswordChanged}
                  value={
                    isCreateType(this.props.type)
                      ? this.state.userForm.password
                      : this.state.userFormEdit.password
                  }
                />
                <div className="input-group-append ">
                  <Button
                    type="button"
                    className="input-group-text text-muted cursor-pointer rounded-0"
                    clicked={this.onPasswordSecureClickHandler}
                  >
                    {this.state.passwordSecured ? 'show' : 'hide'}
                  </Button>
                </div>
              </div>
            </div>
          </Fragment>
        )}
        <div className="form-group d-flex justify-content-end mt-3">
          <Button
            type="submit"
            className={`btn btn-sm btn-success mx-1 ${
              !!!this.state.isSaveButtonAllowed ? 'cursor-not-allowed' : ''
            }`}
            disabled={!!!this.state.isSaveButtonAllowed}
          >
            {renderTypeString(this.props.type)}
          </Button>
          <Button
            type="button"
            className="btn btn-sm btn-danger mx-1"
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
    categories: state.categories.current
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStart: user => dispatch(userCreateStart(user)),
    editStart: (id, user) => dispatch(userEditStart(id, user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
