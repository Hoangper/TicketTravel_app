import axios from 'axios';
import {BASE_URL} from '../../environment';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiService;
