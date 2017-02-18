// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import ALL_DATA from '../fixtures/alldata.js';

class SearchResultItem extends Component {
  render() {
    const { id, title, previewText, authors, year, currentSearch} = this.props;
    const boldTerms = function(text, term){
      return text.split(' ').map(function(word){
          if(word === term) {
            return (<b>{word} </b>);
          } else {
            return (<span>{word} </span>);
          }
        });
    }
    const boldedPreviewText = boldTerms(previewText, currentSearch);
    const boldedTitle = boldTerms(title, currentSearch);
    return (
      <div className="searchResultItem">
        {boldedTitle}
        {authors}
        {year}
        {boldedPreviewText}
      </div>
    );
  }
}

export default SearchResultItem;
