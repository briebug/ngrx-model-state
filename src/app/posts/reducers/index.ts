import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { PostsState, postReducer, postAdapter } from './post';


export interface State {
  posts: PostsState;
}

export const reducers: ActionReducerMap<State> = {
  posts: postReducer
};

export const selectPostState = createFeatureSelector<PostsState>('posts');

export const getSelectedId = (state: PostsState) => state.selectedPostId;

export const getSelectedPostId = createSelector(
  selectPostState,
  getSelectedId
);

export const {
  selectIds: selectPostIds,
  selectEntities: selectPostEntities,
  selectAll: selectAllPosts,
  selectTotal: selectPostTotal
} = postAdapter.getSelectors(selectPostState);

