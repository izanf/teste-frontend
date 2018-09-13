import axios from 'axios';
import { API_URL } from '../config/constants';

const API = axios.create({
  baseURL: API_URL,
});

const FILMS_ENDPOINT = '';

export default {
  films: () => API.get(`${FILMS_ENDPOINT}`, { params: { s: 'any'}}),
};
