// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Text } from 'react-dom';
import _ from 'underscore';
import showdown from 'showdown';
import styles from './Window2.css';
import ALL_DATA from '../fixtures/alldata.js';
import IMAGES_BY_PAPER_ID from '../fixtures/imagesById.js'
const indexedImages = _.indexBy(IMAGES_BY_PAPER_ID, 'id');

class DetailMetadata extends Component {
  render() {
    const { paperId } = this.props;
    const { imageNames, directory }  = indexedImages[+paperId];
    console.log('i,',imageNames);
    return (
      <div className="detailMetadata four columns">
      <div className="row">
        <p>Text Details</p>
        {
          imageNames.map(function(imageName){
            console.log('image',imageName);
            return (<p key={directory+ '/' + imageName}>{imageName}</p>)
          })
        }
      </div>
    </div>
    );
  }
}

export default DetailMetadata;
