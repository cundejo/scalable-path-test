import axios from 'axios';

export function getAuthorService() {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}

export function getPostService() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}
