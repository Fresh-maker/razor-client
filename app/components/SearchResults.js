// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import ALL_DATA from '../fixtures/alldata.js';
import SearchResultItem from './SearchResultItem.js'

class SearchResults extends Component {
  render() {
    console.log('p: ',this.props);
    const { currentSearch } = this.props;
    const getFilteredResults = function(allTerms){
        return allTerms.filter(
          (el)=>(el.title + ' ' + el.previewText).indexOf(currentSearch) > -1
        ).map(
          (el)=><SearchResultItem currentSearch={currentSearch} key={el.id} {...el}></SearchResultItem>)
    }
    const filteredResults = getFilteredResults(ALL_DATA);
    return (
      <div className="searchResults">
        {filteredResults}
      </div>
    );
  }
}

export default SearchResults;
