import { handleActions } from 'redux-actions';
import { GET_AUTHOR_FULFILLED } from '../types/types';

export default handleActions(
  {
    [GET_AUTHOR_FULFILLED]: (state, action) => ({
      ...state,
      authors: action.payload.data,
    }),
  },
  {}
);
