import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://react-db-94b32.firebaseio.com'
});

export default instance;
