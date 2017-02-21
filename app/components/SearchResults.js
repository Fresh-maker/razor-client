// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import ALL_DATA from '../fixtures/alldata.js';
import SearchResultItem from './SearchResultItem.js'

class SearchResults extends Component {
  render() {
    const { currentSearch, facets } = this.props;
    const getFilteredResults = function(allTerms){
        return allTerms.filter(
          (el)=>(el.title.toLowerCase() + ' ' + el.previewText.toLowerCase()).indexOf(currentSearch.toLowerCase()) > -1
        ).map(
          (el)=><div><SearchResultItem currentSearch={currentSearch} key={el.id} {...el}></SearchResultItem><br/></div>)
    }
    const filteredResults = getFilteredResults(ALL_DATA);
    return (
      <div className="searchResults">
      f: {facets.journal && facets.journal.length }
        {filteredResults}
      </div>
    );
  }
}

export default SearchResults;
