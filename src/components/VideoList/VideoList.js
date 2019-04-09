import React from 'react';

import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos }) => {
  console.log(videos);
  const renderedList = videos.map(video => {
    return <VideoItem video={renderedList} />;
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
