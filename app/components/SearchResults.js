// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import ALL_DATA from '../fixtures/alldata.js';
import SearchResultItem from './SearchResultItem.js';

class SearchResults extends Component {
  render() {
    const { currentSearch, facets } = this.props;
    const getFilteredResults = function (allTerms) {
      return allTerms.filter(
          (el) => (`${(el.searchTerm || '').toLowerCase()} ${el.title.toLowerCase()} ${el.previewText.toLowerCase()}`).indexOf(currentSearch.toLowerCase()) > -1
        ).filter((el) => {
          const facetCount = Object.keys(_.filter(facets, (f) => f.length > 0)).length;
          if (facetCount < 1) { return true; }

          for (const key in facets) {
            if (facets[key].length > 0) {
              if (_.contains(facets[key], el[key])) {
                return true;
              }
            }
          }
          return false;
        }).map(
          (el,i) => <SearchResultItem currentSearch={currentSearch} key={i} {...el} />
        );
    };
    const filteredResults = getFilteredResults(ALL_DATA);
    return (
      <div className="searchResults">
        {filteredResults}
      </div>
    );
  }
}

export default SearchResults;
