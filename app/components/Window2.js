// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import styles from './Window2.css';

class Window2 extends Component {
  render() {
    const { currentSearch, updateSearch } = this.props;
    return (
      <div className="window2">
        <div className={styles.btnGroup}>
        here are some details
        </div>
        <div className={`counter ${styles.counter}`}>
          {currentSearch}
        </div>
      </div>
    );
  }
}

export default Window2;
