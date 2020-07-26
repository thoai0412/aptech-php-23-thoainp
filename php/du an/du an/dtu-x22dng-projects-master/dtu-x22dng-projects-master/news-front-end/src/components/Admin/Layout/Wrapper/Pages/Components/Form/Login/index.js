import React from 'react';
import Button from '../../../../../../../UI/Button';
import image from '../../../../../../../../assets/images/crashzone-logo.svg';
import Input from '../Details/Input';
import HelpText from '../Details/HelpText';
import {
  showHelpTextLoginForm,
  addClassInputLoginForm,
  textRequireEmail,
  textRequirePassword
} from '../../../../../../../../helpers';
const Login = props => {
  return (
    <form
      action=""
      className="d-flex justify-content-center align-items-center flex-column w-75 login__form p-3 bg-light"
      onSubmit={props.loginSubmitHandler}
    >
      <div className="d-flex justify-content-center form-group w-50">
        <img src={image} alt="" className="w-25 h-25" />
      </div>
      <div className="form-group w-75 mb-0">
        <HelpText className="Help__Text--height m-0 mb-2">
          {showHelpTextLoginForm(
            props.email.length,
            props.validEmail,
            textRequireEmail()
          )}
        </HelpText>
        <div className="input-group">
          <Input
            value={props.email}
            onChange={props.onInputEmailChange}
            type="text"
            className={[
              'form-control form-control-lg',
              addClassInputLoginForm(props.validEmail)
            ].join(' ')}
            placeholder="Email Address"
            autoFocus
          />
        </div>
      </div>
      <div className="form-group w-75">
        <HelpText className="Help__Text--height mb-2">
          {showHelpTextLoginForm(
            props.password.length,
            props.validPassword,
            textRequirePassword()
          )}
        </HelpText>
        <div className="input-group">
          <Input
            value={props.password}
            onChange={props.onInputPasswordChange}
            type={props.passwordSecure ? 'password' : 'text'}
            className={[
              'form-control form-control-lg',
              addClassInputLoginForm(props.validPassword)
            ].join(' ')}
            placeholder="Password"
          />
          <div className="input-group-append ">
            <span
              className="input-group-text text-muted cursor-pointer rounded-0"
              onClick={props.onPasswordSecureHandler}
            >
              {props.passwordSecure ? 'show' : 'hide'}
            </span>
          </div>
        </div>
      </div>
      <div className="form-group input-group-lg d-flex justify-content-center w-100">
        <Button
          type="submit"
          className="btn btn-primary w-50 text-light font-weight-bold login__form__button"
          disabled={!props.validEmail || !props.validPassword}
          clicked={event => props.loginSubmitHandler(event)}
        >
          log in
        </Button>
      </div>
    </form>
  );
};

export default Login;
