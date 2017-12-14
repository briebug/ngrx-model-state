import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromComments from './comment';
import * as fromPosts from '../../posts/reducers/post';
import * as postSelectors from '../../posts/reducers';

export interface State {
  posts: fromComments.State;
}

export const reducers: ActionReducerMap<State> = {
  posts: fromComments.commentReducer
};

export const selectCommentState = createFeatureSelector<fromComments.State>('comments');

export const {
  // select the array of comment ids
  selectIds: selectCommentIds,

  // select the dictionary of comment entities
  selectEntities: selectCommentEntities,

  // select the array of comments
  selectAll: selectAllComments,

  // select the total count
  selectTotal: selectCommentTotal
} = fromComments.adapter.getSelectors(selectCommentState);

export const selectByPostId = createSelector(
  selectAllComments,
  postSelectors.getSelectedPostId,
  (comments, postId) => {
    return comments.filter(comment => comment.postId === postId);
  }
);
