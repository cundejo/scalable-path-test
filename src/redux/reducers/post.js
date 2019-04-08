import { handleActions } from 'redux-actions';
import { GET_POST_FULFILLED } from '../types/types';

export default handleActions(
  {
    [GET_POST_FULFILLED]: (state, action) => ({
      ...state,
      posts: action.payload.data,
    }),
  },
  {}
);
