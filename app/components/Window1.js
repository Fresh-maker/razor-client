// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import styles from './Window1.css';
import SearchResults from './SearchResults.js';
import FacetPage from '../containers/FacetPage.js';


class Window1 extends Component {
  render() {
    const { currentSearch, facets, updateSearch } = this.props;
    return (
      <div>
      <div className="row">
        <input className="lookup" type="text" defaultValue="Try Pink1 GENE" onChange={updateSearch} />
      </div>

      <div className="row">
        <p> Window1</p>
      </div>
      <div className="row">
        <div className="eight columns"> <SearchResults currentSearch={currentSearch} facets={facets}> </SearchResults> </div>
        <div className="four columns"> <FacetPage /> </div>
      </div>

    </div>
    );
  }
}

export default Window1;
