import React, { Component } from 'react';

import SearchBar from './SearchBar';

import youtube from '../apis/youtube';

class App extends Component {
  onTermSubmit = term => {
    youtube
      .get('/search', {
        params: {
          q: term
        }
      })
      .then(res => console.log(res.data.items));
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
