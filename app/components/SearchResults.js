// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import SearchResultItem from './SearchResultItem.js';

class SearchResults extends Component {
  render() {
    const { currentSearch, facets, searchResults } = this.props;
    const filteredResults = searchResults.map(
          (el,i) => <SearchResultItem currentSearch={currentSearch} key={i} {...el} />
        );
    return (
      <div className="searchResults">
        {filteredResults}
      </div>
    );
  }
}

export default SearchResults;
