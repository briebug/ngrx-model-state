import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromPost from './post';

export interface State {
  posts: fromPost.State;
}

export const reducers: ActionReducerMap<State> = {
  posts: fromPost.postReducer
};

export const selectPostState = createFeatureSelector<fromPost.State>('posts');

export const {
  // select the array of user ids
  selectIds: selectPostIds,

  // select the dictionary of user entities
  selectEntities: selectPostEntities,

  // select the array of posts
  selectAll: selectAllPosts,

  // select the total user count
  selectTotal: selectPostTotal
} = fromPost.adapter.getSelectors(selectPostState);

