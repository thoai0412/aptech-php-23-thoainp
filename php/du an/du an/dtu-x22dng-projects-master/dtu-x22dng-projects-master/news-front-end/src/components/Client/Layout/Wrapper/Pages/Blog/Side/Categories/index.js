import React, { Component } from 'react';
import { categoriesFetchStart } from '../../../../../../../../store/actions/admin/categories.action';
import { connect } from 'react-redux';
import Category from './Category';
class index extends Component {
  componentDidMount() {
    if (
      this.props.postCategories &&
      Object.keys(this.props.postCategories).length > 0
    ) {
    } else {
      if (this.props.categories.length === 0) {
        this.props.categoriesFetchStart();
      }
    }
  }

  render() {
    const categories =
      this.props.postCategories &&
      Object.keys(this.props.postCategories).length > 0
        ? { ...this.props.postCategories }
        : { ...this.props.categories };
    return (
      <div className="my-2">
        <h3>Categories</h3>
        {Object.keys(categories).map((key, index) => {
          const category = categories[key];
          return <Category key={category.id} index={++index} {...category} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.current
  };
};

const mapDispatchToProps = dispatch => ({
  categoriesFetchStart: () => dispatch(categoriesFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
