import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromComment from './comment';

export interface State {
  posts: fromComment.State;
}

export const reducers: ActionReducerMap<State> = {
  posts: fromComment.commentReducer
};

export const selectCommentState = createFeatureSelector<fromComment.State>('comments');

export const {
  // select the array of comment ids
  selectIds: selectCommentIds,

  // select the dictionary of comment entities
  selectEntities: selectCommentEntities,

  // select the array of comments
  selectAll: selectAllComments,

  // select the total count
  selectTotal: selectCommentTotal
} = fromComment.adapter.getSelectors(selectCommentState);

export const selectByPostId = createSelector(
  selectAllComments,
  (comments) => {
    return comments.filter(comment => comment.postId === 1)
  }
);
