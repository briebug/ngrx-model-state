import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Post, User } from '../models/post';
import { PostActions, PostActionTypes } from '../actions/post';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface AppState {
  posts: Post[];
  comments: Comment[];
  users: User[];
}

export interface PostsState extends EntityState<Post> {
  selectedPostId: number | null;
}

export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  selectId: (post: Post) => post.id,
  sortComparer: false
});

export const initialState: PostsState = postAdapter.getInitialState({
  // hard coded to the first and only post in the array
  // since we don't have a post page, there is no way to select a post,
  // so we are just hard coding to the first post to simulate
  selectedPostId: 1
});

export function postReducer(
  state = initialState,
  action: PostActions
): PostsState {
  switch (action.type) {
    case PostActionTypes.Load:
      return {
        ...state
      };

    case PostActionTypes.LoadSuccess:
      return {
        ...postAdapter.addMany(action.payload, state)
      };

    case PostActionTypes.LoadFail:
      return {
        ...state,
        ...action.payload
      };

    case PostActionTypes.Select: {
      return {
        ...state,
        selectedPostId: action.payload,
      };
    }

    default:
      return state;
  }
}
