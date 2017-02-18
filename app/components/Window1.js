// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import styles from './Window1.css';

class Window1 extends Component {
  render() {
    const { currentSearch, updateSearch } = this.props;
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`}>
          {currentSearch}
        </div>
        <div className={styles.btnGroup}>
        Search: <input type="text" defaultValue="search" onChange={updateSearch} />
        </div>
      </div>
    );
  }
}

export default Window1;
