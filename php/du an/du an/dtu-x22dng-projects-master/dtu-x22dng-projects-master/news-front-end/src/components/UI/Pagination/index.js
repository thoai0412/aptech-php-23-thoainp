import React from 'react';
import Number from './Number';
const index = props => {
  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        <li className={['page-item', !!props.prev_page_url ? '' : 'disabled'].join(' ')}>
          <a
            className="page-link"
            onClick={_ => props.onPaginateClicked(props.prev_page_url)}
          >
            Previous
          </a>
        </li>
        {props.current_page >= 3 && (
          <Number clicked={_ => props.onPaginateClicked(props.first_page_url)}>
            1
          </Number>
        )}
        {props.current_page > 3 && props.last_page > 3 && <Number>...</Number>}
        {props.current_page - 1 > 0 && (
          <Number clicked={_ => props.onPaginateClicked(props.prev_page_url)}>
            {props.current_page - 1}
          </Number>
        )}
        <Number className="active">{props.current_page}</Number>
        {props.current_page + 1 < props.last_page && (
          <Number clicked={_ => props.onPaginateClicked(props.next_page_url)}>
            {props.current_page + 1}
          </Number>
        )}

        {props.last_page - 2 > props.current_page && <Number>...</Number>}
        {props.last_page - 1 >= props.current_page && (
          <Number clicked={_ => props.onPaginateClicked(props.last_page_url)}>
            {props.last_page}
          </Number>
        )}
        {/* {props.nums &&
          Object.keys(props.nums).map(num => {
            return <Number>num</Number>;
          })} */}
        <li className={['page-item', !!props.next_page_url ? '' : 'disabled'].join(' ')}>
          <a
            className="page-link"
            onClick={_ => props.onPaginateClicked(props.next_page_url)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default index;
