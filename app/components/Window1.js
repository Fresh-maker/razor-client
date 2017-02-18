// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import styles from './Window1.css';

class Window1 extends Component {
  render() {
    const { currentSearch, updateSearch } = this.props;
    return (
      <div className="window1">
        <div className={styles.btnGroup}>
          Search: <input type="text" defaultValue="search" onChange={updateSearch} />
        </div>
        <div className={`counter ${styles.counter}`}>
          {currentSearch}
        </div>
      </div>
    );
  }
}

export default Window1;
