import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_UNSPLASH_URL;

export default axios.create({
  baseURL: URL,
  headers: {
    // Note: We are only keeping the API key in the client side for this demo.
    // The proper way to make requests using an API Key is to do the following:
    // 1. Front End -> send request to -> Back End
    // 2. Back End has the API_KEY and makes the request to URL
    // 3. Back End gets data and formats it then sends it back to the front end
    Authorization: `Client-ID ${API_KEY}`,
  },
});
