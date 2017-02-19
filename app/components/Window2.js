// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import _ from 'underscore';
import styles from './Window2.css';
import ALL_DATA from '../fixtures/alldata.js';
const ALL_DATA_BY_ID = _.indexBy(ALL_DATA, 'id');


class Window2 extends Component {
  render() {
    const { currentSearch, updateSearch } = this.props;
    return (
      <div className="window2">
        <div className={styles.btnGroup}>
        {ALL_DATA_BY_ID[this.props.params.id].previewText}
        </div>
      </div>
    );
  }
}

export default Window2;
