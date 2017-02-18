// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import styles from './Window2.css';
import ALL_DATA from '../fixtures/alldata.js';

class SearchResults extends Component {
  render() {
    const { currentSearch } = this.props;
    return (
      <div className="window2">
        <div className={`counter ${styles.counter}`}>
          {ALL_DATA.filter(
            (el)=>el.title.indexOf(currentSearch) > -1
          ).map(
            (el)=><div>{el.title}</div>)
          }
        </div>
      </div>
    );
  }
}

export default SearchResults;
