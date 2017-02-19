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
    function linkify(text){
      return (
        <div className="fullText">
          {
            text.split(' ').map(
              function(word){
                if (word.indexOf('<Link>') > -1) {
                  const [,url,text]= word.split('|');
                  return <Link to={url}>{text}</Link>
                } else {
                  return word+' '
                }
              }
            )
          }
        </div>

      );
    }
    const fullText = linkify(ALL_DATA_BY_ID[this.props.params.id].fullText);
    const { currentSearch, updateSearch } = this.props;
    return (
      <div className="window2">
      <div className="row">
        <p>Window2</p>
        {fullText}
      </div>

    </div>
    );
  }
}

export default Window2;
