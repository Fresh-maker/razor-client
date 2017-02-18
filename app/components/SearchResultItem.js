// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import ALL_DATA from '../fixtures/alldata.js';

class SearchResultItem extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="searchResultItem">
        {title}
      </div>
    );
  }
}

export default SearchResultItem;
