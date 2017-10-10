import { Post } from '../../posts/models/post';
import { Comment } from '../models/comment';
import * as commentActions from '../actions/comment';

export type Action = commentActions.All;

export interface AppState {
  comments: Comment[]
}

export function commentReducer(state: Post[] = [], action: Action) {
  switch (action.type) {

    case commentActions.SAVE_COMMENT:
      return { ...state, ...action.payload };

    case commentActions.SAVE_COMMENT_SUCCESS:
      return { ...state };

    case commentActions.SAVE_COMMENT_FAIL:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
