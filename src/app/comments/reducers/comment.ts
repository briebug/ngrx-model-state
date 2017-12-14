import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Post } from '../../posts/models/post';
import { Comment } from '../models/comment';
import { CommentActions, CommentActionTypes } from '../actions/comment';

export interface AppState {
  comments: Comment[];
}

export interface CommentsState extends EntityState<Comment> { }

export const commentAdapter: EntityAdapter<Comment> = createEntityAdapter<Comment>({
  selectId: (comment: Comment) => comment.id,
  sortComparer: false
});

export const initialState: CommentsState = commentAdapter.getInitialState();

export function commentReducer(
  state = initialState,
  action: CommentActions
): CommentsState {
  switch (action.type) {

    case CommentActionTypes.Add:
      return {
        ...commentAdapter.addOne(action.payload, state)
      };

    case CommentActionTypes.LoadSuccess:
      return {
        ...commentAdapter.addMany(action.payload, state)
      };

    case CommentActionTypes.LoadFail:
      return {
        ...state,
        ...action.payload
      };

    case CommentActionTypes.SaveSuccess:
      return {
        ...commentAdapter.addOne(action.payload, state)
      };

    case CommentActionTypes.SaveFail:
      return {
        ...state,
        ...action.payload
      };

    default:
      return { ...state };
  }
}
