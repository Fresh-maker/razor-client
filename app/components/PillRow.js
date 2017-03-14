// @flow
import React, { Component } from 'react';
class PillRow extends Component {
  render() {
    const { currentSearch, updateSearch, searchpairs} = this.props;
    return (
      <div>
      {
        searchpairs.map(({term, category}, index)=>{
          return (
            <div key={index} className="searchPair">
              <span>{term} [{category}]</span>&nbsp;
            </div>
          )
        })
      }
      </div>
    );
  }
}

export default PillRow;
