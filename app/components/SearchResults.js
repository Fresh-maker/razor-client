// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import ALL_DATA from '../fixtures/alldata.js';
import SearchResultItem from './SearchResultItem.js'

class SearchResults extends Component {
  render() {
    const { currentSearch } = this.props;
    return (
      <div className="searchResults">
        {ALL_DATA.filter(
          (el)=>(el.title + ' ' + el.previewText).indexOf(currentSearch) > -1
        ).map(
          (el)=><SearchResultItem currentSearch={currentSearch} key={el.id} {...el}></SearchResultItem>)
        }
      </div>
    );
  }
}

export default SearchResults;
