// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import ALL_DATA from '../fixtures/alldata.js';
import showdown from 'showdown';
const converter = new showdown.Converter();

class SearchResultItem extends Component {
  render() {
    const { id, title, previewText, authors, year, currentSearch } = this.props;
    const titleStyle = {
      color: 'turquoise'
    };
    const authorStyle = {
      color: 'rgb(240,230,140)'
    };
    const previewStyle = {
      color: 'gray'
    };
    const yearStyle = {
      color: 'lightblue'
    };
    return (
      <div key={id} className="searchResultItem" >
        <Link to={`/window2/${id}`}>
          <span style={titleStyle} dangerouslySetInnerHTML={{ __html: title }} /><br />
          <span style={authorStyle}>{authors.join(' ')}</span><br />
          <span style={yearStyle}>{year}</span><br />
          <span style={previewStyle} dangerouslySetInnerHTML={{ __html: previewText }} /><br />
        </Link>
      </div>
    );
  }
}

export default SearchResultItem;
