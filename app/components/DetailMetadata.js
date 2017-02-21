// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import _ from 'underscore';
import showdown from 'showdown';
import styles from './Window2.css';
import ALL_DATA from '../fixtures/alldata.js';
import IMAGES_BY_PAPER_ID from '../fixtures/imagesById.js'

class DetailMetadata extends Component {
  render() {
    const { paperId } = this.props;
    return (
      <div className="detailMetadata four columns">
      <div className="row">
        <p>Text Details</p>
        <img style={{width:'40px'}} src={`../resources/figures/paper${paperId}/fig1.png`}/>
      </div>
    </div>
    );
  }
}

export default DetailMetadata;
