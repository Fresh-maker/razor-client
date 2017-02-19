// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import _ from 'underscore';
import showdown from 'showdown';
import styles from './Window2.css';
import ALL_DATA from '../fixtures/alldata.js';
const ALL_DATA_BY_ID = _.indexBy(ALL_DATA, 'id');
const converter = new showdown.Converter();

class Window2 extends Component {
  render() {
    const { currentSearch, updateSearch } = this.props;
    const text = ALL_DATA_BY_ID[this.props.params.id].fullText;
    const html = converter.makeHtml(text);
    return (
      <div className="window2">
      <div className="row">
        <p>Window2</p>
        <div className="fullDetails" dangerouslySetInnerHTML={{__html: html}} ></div>
      </div>

    </div>
    );
  }
}

export default Window2;
