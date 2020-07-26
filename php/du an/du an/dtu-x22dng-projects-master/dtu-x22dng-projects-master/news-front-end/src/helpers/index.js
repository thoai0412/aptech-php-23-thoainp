import jwtDecode from 'jwt-decode';
import moment from 'moment';
import React from 'react';
import validator from 'validator';

import Anchor from '../components/Details/Anchor';

import logo from '../assets/images/crashzone-logo.svg';

import {
  USER_CREATE_START,
  USER_EDIT_START,
  CATEGORY_CREATE_START,
  CATEGORY_EDIT_START,
  POST_CREATE_START,
  POST_UPDATE_START
} from './constants';

import store from '../store';
import {
  authRefreshToken,
  authLogIn
} from '../store/actions/admin/auth.action';
import { ADMIN_PAGES_NAME } from './constants';

import NotFoundPage from '../containers/404';
import Posts from '../components/Admin/Layout/Wrapper/Pages/Posts';
import Users from '../components/Admin/Layout/Wrapper/Pages/Users';
import Categories from '../components/Admin/Layout/Wrapper/Pages/Categories';

export const logoImage = () => {
  return logo;
};

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const adminPageRender = page => {
  switch (page.toLowerCase()) {
    case ADMIN_PAGES_NAME.USERS:
      return <Users />;
    case ADMIN_PAGES_NAME.POSTS:
      return <Posts />;
    case ADMIN_PAGES_NAME.CATEGORIES:
      return <Categories />;
    default:
      return <NotFoundPage />;
  }
};

export const hrefArticle = slug => {
  return `/blog/posts/${slug}`;
};

export const setDataToArray = data => {
  return [...data];
};

export const pushDataToArray = (oldArray, newData) => {
  return [...oldArray, newData];
};

export const unshiftDataToArray = (newData, oldArray) => {
  return [newData, ...oldArray];
};

export const setDataToObject = data => {
  return { ...data };
};
export const addDataToObject = (oldObject, newObject) => {
  return { ...oldObject, newObject };
};

export const sortDescendingArrayById = array => {
  return array.sort((a, b) => {
    return b.id - a.id;
  });
};

export const removeDataFromArrayById = (array, id) => {
  return array.filter(element => element.id !== id);
};

export const removeDataFromArrayByValue = (array, value) => {
  return array.filter(element => element !== value);
};

export const removeDataFromArrayByProperty = (array, property, data) => {
  return array.filter(object => object[property] !== data);
};

export const removeDuplicateObjectInArrayByProperty = (array, property) => {
  return array.filter((element, index, self) => {
    return self.map(obj => obj[property]).indexOf(element[property]) === index;
  });
};

export const replaceDataInArrayById = (array, data) => {
  return array.map(item => {
    let temp = item;
    data.map(newItem => {
      if (item.id === newItem.id) {
        return (temp = newItem);
      }
      return null;
    });
    return temp;
  });
};

export const updateDataToArrayById = (array, data) => {
  return array.map(item => {
    if (item.id !== data.id) {
      return item;
    }

    return {
      ...item,
      ...data
    };
  });
};

export const updateValueInArrayByName = (array, data) => {
  return array.map(item => {
    if (item.name !== data.name) {
      return item;
    }

    return {
      ...item,
      value: data.value
    };
  });
};

export const childrenOfListHeader = (type, { name, slug, clicked }) => {
  switch (type) {
    case 'button':
      return (
        <a
          href="/#"
          className="nav-link text-dark py-0 pl-2 border border-dark bg-yellow-cz-custom text-capitalize"
          onClick={event => {
            event.preventDefault();
            clicked();
          }}
        >
          {name}
        </a>
      );
    case 'anchor':
      return slug === 'rate-calculator' || slug === 'forum' ? (
        <a
          href={
            slug === 'rate-calculator'
              ? 'http://www.crashzone.com.au/sc'
              : 'http://www.crashzone.com.au/forum/viewforum.php?f=2'
          }
          rel="noopener noreferrer"
          className="nav-link text-dark py-0 pl-2 "
        >
          {name}
        </a>
      ) : (
        <Anchor href={slug} className="nav-link text-dark py-0 pl-2 ">
          {name}
        </Anchor>
      );

    default:
      return;
  }
};

export const convertStringToUrl = string => {
  return string.replace(' ', '-').toLowerCase();
};

export const fontAwesomeType = {
  USERS: 'users',
  THLIST: 'th-list',
  TACHOMETERALT: 'tachometer-alt',
  NEWSPAPER: 'newspaper',
  PLUS: 'plus',
  MINUS: 'minus',
  TIMES: 'times',
  EYE: 'eye'
};

export const iconClass = type => {
  switch (type.toUpperCase()) {
    case fontAwesomeType.USERS.toUpperCase():
      return fontAwesomeType.USERS;
    case fontAwesomeType.THLIST.toUpperCase():
      return fontAwesomeType.THLIST;
    case fontAwesomeType.TACHOMETERALT.toUpperCase():
      return fontAwesomeType.TACHOMETERALT;
    case fontAwesomeType.NEWSPAPER.toUpperCase():
      return fontAwesomeType.NEWSPAPER;
    case fontAwesomeType.PLUS.toUpperCase():
      return fontAwesomeType.PLUS;
    case fontAwesomeType.MINUS.toUpperCase():
      return fontAwesomeType.MINUS;
    case fontAwesomeType.TIMES.toUpperCase():
      return fontAwesomeType.TIMES;
    case fontAwesomeType.EYE.toUpperCase():
      return fontAwesomeType.EYE;

    default:
      return null;
  }
};

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const addArray = (oldArray, newData) => {
  return [...oldArray, newData];
};

export const isExistsToken = _ => {
  const token = localStorage.getItem('cz.token');
  if (token) {
    if (isTokenExpired(token)) {
      if (canTokenRefresh(token)) {
        store.dispatch(authRefreshToken(token));
      } else {
        localStorage.removeItem('cz.token');
      }
    } else {
      store.dispatch(authLogIn(parseToken(token)));
    }
  }
};

export const isTokenExpired = token => {
  const tokenInfo = jwtDecode(token);
  const currentTime = moment().unix();
  return currentTime >= tokenInfo.exp;
};

export const isAuthenticated = state => {
  return !!state.auth.token && !isTokenExpired(state.auth.token);
};

export const isValidName = name => {
  return name === ''
    ? null
    : name
        .trim()
        .split(' ')
        .every(word => validator.isAscii(word)) &&
        validator.isLength(name, { min: 2 });
};

export const isValidEmail = email => {
  return email === '' ? null : validator.isEmail(email);
};

export const isValidPassword = password => {
  return validator.isLength(password, 3) && validator.isAscii(password);
};

export const isValidTitle = title => {
  return title === '' ? null : validator.isLength(title, { min: 5 });
};
export const isValidDescription = description => {
  return description === ''
    ? null
    : validator.isLength(description, { min: 5 });
};

export const parseToken = token => {
  const tokenInformation = jwtDecode(token);
  return { token: token, ...tokenInformation };
};

export const canTokenRefresh = token => {
  const tokenInfo = jwtDecode(token);
  const invalidTime = moment()
    .add(14, 'days')
    .unix();

  return invalidTime >= tokenInfo.iat;
};

export const isNull = item => item === null;
export const isTrue = item => item === true;
export const isFalse = item => item === false;
export const isLengthZero = length => length === 0;

export const showHelpTextLoginForm = (
  length,
  item,
  text = 'help text here'
) => {
  return isNull(item)
    ? null
    : isFalse(item) && !isLengthZero(length)
      ? text
      : null;
};

export const addClassInputLoginForm = item => {
  return isNull(item) ? null : isFalse(item) ? 'is-invalid' : 'is-valid';
};

export const addInputValidClass = item => {
  return isNull(item) ? null : isFalse(item) ? 'is-invalid' : 'is-valid';
};

export const textRequireEmail = () => {
  return 'Please input the valid email, e.g : email@autointegrity.com.au.';
};

export const textRequirePassword = () => {
  return 'Please input valid password, at least 3 characters, e.g : 123.';
};

export const textRequireName = () => {
  return 'Please input the valid name, just alphabet and at least 2 characters';
};

export const helpTextRequire = (inputName, required) => {
  return `Please input valid ${inputName}, it's required : ${required}`;
};

export const passwordPlaceholderByType = type => {
  switch (type) {
    case USER_CREATE_START:
      return 'Password';
    case USER_EDIT_START:
      return 'New Password';
    default:
      return null;
  }
};

export const renderTypeString = type => {
  switch (type) {
    case CATEGORY_CREATE_START:
    case POST_CREATE_START:
    case USER_CREATE_START:
      return 'create';
    case CATEGORY_EDIT_START:
    case USER_EDIT_START:
      return 'edit';
    case POST_UPDATE_START:
      return 'update';
    default:
      return null;
  }
};

export const displayStringTemporary = page => {
  return `display ${page} deleted temporary`;
};

export const hideStringTemporary = page => {
  return `hide ${page} deleted temporary`;
};

export const isCreateType = type => {
  return type.toUpperCase().includes('CREATE');
};

export const isEditType = type => {
  return type.toUpperCase().includes('EDIT');
};

export const isPostValid = ({ content, description, title }) => {
  return (
    !validator.isEmpty(content) &&
    !!isValidDescription(description) &&
    !!isValidTitle(title)
  );
};
