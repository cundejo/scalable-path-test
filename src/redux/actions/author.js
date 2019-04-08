import { createActions } from 'redux-actions';
import { GET_AUTHOR } from '../types/types';
import { getAuthorService } from '../../service';

const { getAuthor } = createActions(GET_AUTHOR);

export const getAuthorInvoker = () => dispatch =>
  dispatch(getAuthor({ promise: getAuthorService() }));
