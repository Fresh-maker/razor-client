// @flow
import React, { Component } from 'react';

class DetailActionDropdown extends Component {
  handleDropdownChange = (actionType)=> {
    switch(actionType) {
      case 'print':
        console.log('window.print',window.print);
        return window.print();
    }
    alert(''+actionType);
  }
  render() {
    const { currentSearch, updateSearch } = this.props;
    const paperId = this.props.params.id;
    return (
        <div className="row">
          <select onChange={(e)=>this.handleDropdownChange(e.target.value)}>
            <option value="">Actions</option>
            <option value="copy">Copy to Clipboard</option>
            <option value="export">Export</option>
            <option value="email">E-mail</option>
            <option value="print">Print</option>
          </select>
        </div>
    );
  }
}

export default DetailActionDropdown;
