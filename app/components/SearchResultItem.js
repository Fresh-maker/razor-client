// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import ALL_DATA from '../fixtures/alldata.js';
import showdown from 'showdown';
const converter = new showdown.Converter();

class SearchResultItem extends Component {
  render() {
    const { id, title, previewText, authors, year, currentSearch} = this.props;
    //const titleHtml = converter.makeHtml(title);
    //const previewHtml = converter.makeHtml(previewText);
    //const boldTerms = function(text, term){
      //let i =0;
      //return text.split(' ').map(function(word){
          //if(word === term) {
            //return (<b key={i++}>{word} </b>);
          //} else {
            //return (<span key={i++}>{word} </span>);
          //}
        //});
    //}
    //const boldedPreviewText = boldTerms(previewText, currentSearch);
    //const boldedTitle = boldTerms(title, currentSearch);
    return (
      <div key={id} className="searchResultItem" >
        <Link to={'/window2/'+id}>
          <span dangerouslySetInnerHTML={{__html: title}}></span><br/>
          {authors.join(' ')}<br/>
          {year}<br/>
          <span dangerouslySetInnerHTML={{__html: previewText}}></span><br/>
        </Link>
      </div>
    );
  }
}

export default SearchResultItem;
