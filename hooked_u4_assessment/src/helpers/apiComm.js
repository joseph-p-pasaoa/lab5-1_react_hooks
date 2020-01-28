/*
JOSEPH P. PASAOA
API Communication Helper Functions | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import axios from 'axios';

    // local
    import myKey from './secrets.js';


/* FETCHES */
export const getApiSearch = async (search) => {
  const baseUrl = `https://www.googleapis.com/youtube/v3/search`;
  const prepParams = `?part=snippet&key=${myKey}&maxResults=8`;
  const prefixSearch = `&q=`;
  const url = baseUrl + prepParams + prefixSearch + search;

  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (err) {
    console.log("error in API get: ", err);
  }
}

export const getApiOneSnippet = async (videoId) => {
  const baseUrl = `https://www.googleapis.com/youtube/v3/videos`;
  const prepParams = `?part=snippet&key=${myKey}&maxResults=1`;
  const prefixId = `&id=`;
  const url = baseUrl + prepParams + prefixId + videoId;

  try {
    const response = await axios.get(url);
    return response.data.items[0].snippet;
  } catch (err) {
    console.log("error in API get: ", err);
  }
}


/* EXPORTS */
export default {
  getApiSearch,
  getApiOneSnippet
};
