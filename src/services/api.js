import axios from 'axios';
import { API_URL } from '../config/constants';

const API = axios.create({
  baseURL: API_URL,
});

export default {
  movies: params => API.get('', { params }),
};
