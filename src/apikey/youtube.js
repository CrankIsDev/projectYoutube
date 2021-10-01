import axios from 'axios';

let Key = `${process.env.REACT_APP_KEY_YOUTUBEKEY}`;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 50,
    key: Key
  }
})