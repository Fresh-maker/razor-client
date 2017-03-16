// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Window1.css';
import SearchResults from './SearchResults.js';
import FacetPage from '../containers/FacetPage.js';
import SearchBar from './SearchBar';


class Window1 extends Component {
  render() {
    const { currentSearch, facets, updateSearch, searchResults } = this.props;
    return (
      <div>
        <SearchBar {...this.props}/>
        <div className="row">
          <p>RESULTS</p>
        </div>
        <div className="row">
          <div className="eight columns">
            <SearchResults currentSearch={currentSearch} facets={facets} searchResults={searchResults}/>
          </div>
          <div className="four columns"> <FacetPage /> </div>
        </div>

      </div>
    );
  }
}

export default Window1;
