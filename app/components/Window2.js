// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import styles from './Window2.css';


class Window2 extends Component {
  render() {
    const { currentSearch, updateSearch } = this.props;
    return (
      <div>
      <div className="row">
        <input className="lookup" type="text" defaultValue="example: PINK1 <Gene>" onChange={updateSearch} /> {currentSearch}
      </div>

      <div className="row">
        <p>Window2</p>
      </div>

</div>
    );
  }
}

export default Window2;
