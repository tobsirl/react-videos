import axios from 'axios';

const KEY = 'AIzaSyAucF1gt2X4d9FTAcus9BZQdDdFBhe-glQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
