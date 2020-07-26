import React from 'react';
import List from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
const index = props => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb rounded-0">
        {props.data.map((key, index) => {
          return (
            <List
              key={index}
              name={key}
              last={index === props.data.length - 1}
            />
          );
        })}
        {props.sort && (
          <li className="d-flex align-items-center ml-auto">
            <FontAwesomeIcon
              icon="list"
              className="Breadcrumb__list__sort active mx-1"
            />
            &#124;
            <FontAwesomeIcon
              icon="th-large"
              className="Breadcrumb__list__sort mx-1"
            />
          </li>
        )}
      </ol>
    </nav>
  );
};

export default index;
