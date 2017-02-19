// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import styles from './Window1.css';
import SearchResults from './SearchResults.js';


class Window1 extends Component {
  render() {
    const { currentSearch, updateSearch } = this.props;
    return (

      <div>
      <div className="row">
        <input className="lookup" type="text" defaultValue="Try Pink1 GENE" onChange={updateSearch} />
      </div>

      <div className="row">
        <p>Window1</p>
      </div>
      <div className="row">
        <SearchResults currentSearch={currentSearch}> </SearchResults>
      </div>

</div>
    );
  }
}

export default Window1;
