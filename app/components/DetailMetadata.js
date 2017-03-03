// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import showdown from 'showdown';
import styles from './Window2.css';
import ALL_DATA from '../fixtures/alldata.js';
import IMAGES_BY_PAPER_ID from '../fixtures/imagesById.js';
const indexedImages = _.indexBy(IMAGES_BY_PAPER_ID, 'id');

class DetailMetadata extends Component {
  render() {
    const { paperId } = this.props;
    const { imageNames, directory } = indexedImages[+paperId];
    return (
      <div className="detailMetadata four columns">
        <div className="row">
          <p>Text Details</p>
          {
          imageNames.map((imageName) => (<a key={`${directory}/${imageName}`} target="_new" href={`../resources/figures/${directory}/${imageName}`}><p key={`${directory}/${imageName}`}>{imageName}</p></a>))
        }
        </div>
      </div>
    );
  }
}

export default DetailMetadata;
