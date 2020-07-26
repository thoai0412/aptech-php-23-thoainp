import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { categoriesFetchStart } from '../../../../../store/actions/admin/categories.action';
class index extends React.Component {
  componentDidMount() {
    this.props.categoriesFetchStart();
  }

  render() {
    return (
      <Fragment>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb rounded-0">
            <li className="breadcrumb-item text-uppercase" aria-current="page">
              Categories
            </li>
          </ol>
        </nav>
        <ul className="list-unstyled text-muted ml-2">
          {Object.keys(this.props.categories).map((key, index) => {
            console.log(key);
            return (
              <li key={this.props.categories[key].id} index={++index}>
                {' '}
                {this.props.categories[key].name}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ categories: state.categories.current });
const mapDispatchToProps = dispatch => ({
  categoriesFetchStart: _ => dispatch(categoriesFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
