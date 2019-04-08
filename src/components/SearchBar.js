import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onChangeInput = event => {
    this.setState({ term: event.target.value });
  };

  onSubmitSearch = event => {
    event.preventDefault();
    
    // TODO Make sure we add callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" submit={this.onSubmitSearch}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChangeInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
