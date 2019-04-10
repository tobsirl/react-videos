import React, { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import VideoList from '../components/VideoList/VideoList';
import VideoDetail from '../components/VideoDetail/VideoDetail';

import youtube from '../apis/youtube';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    // console.log(`From the App!`, video.id.videoId);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
