import { createActions } from 'redux-actions';
import { GET_POST } from '../types/types';
import { getPostService } from '../../service';

const { getPost } = createActions(GET_POST);

export const getPostInvoker = () => dispatch =>
  dispatch(getPost({ promise: getPostService() }));
