import { combineReducers } from 'redux';
import post from './post';
import author from './author';

export default combineReducers({
  post,
  author,
});
