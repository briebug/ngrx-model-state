import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Post } from '../../posts/models/post';
import { Comment } from '../models/comment';
import * as commentActions from '../actions/comment';

export type Action = commentActions.All;

export interface AppState {
  comments: Comment[];
}

export interface State extends EntityState<Comment> {}

export const adapter: EntityAdapter<Comment> = createEntityAdapter<Comment>({
  selectId: (comment: Comment) => comment.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState();

export function commentReducer(state = initialState, action: Action) {
  switch (action.type) {

    case commentActions.ADD_COMMENT:
      return {
        ...adapter.addOne(action.payload, state)
      };

    case commentActions.LOAD_COMMENTS_SUCCESS:
      return {
        ...adapter.addMany(action.payload, state)
      };

    case commentActions.LOAD_COMMENTS_FAIL:
      return {
        ...state,
        ...action.payload
      };

    case commentActions.SAVE_COMMENT:
      return { ...state, ...action.payload };

    case commentActions.SAVE_COMMENT_FAIL:
      return { ...state, ...action.payload };

    default:
      return { ...state };
  }
}
