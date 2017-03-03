// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import _ from 'underscore';
import showdown from 'showdown';
import styles from './Window2.css';
import DetailMetadata from './DetailMetadata.js';
import ALL_DATA from '../fixtures/alldata.js';
const ALL_DATA_BY_ID = _.indexBy(ALL_DATA, 'id');
const converter = new showdown.Converter();

class Window2 extends Component {
  render() {
    const { currentSearch, updateSearch } = this.props;
    const id = this.props.params.id;
    const text = ALL_DATA_BY_ID[id].fullText;
    const html = converter.makeHtml(text);
    return (
      <div className="window2">
        <div className="row">
          <p>Window2</p>
          <div className="fullDetails seven columns" dangerouslySetInnerHTML={{ __html: html }} />
          <DetailMetadata paperId={id} />
        </div>

      </div>
    );
  }
}

export default Window2;
