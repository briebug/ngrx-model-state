import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Post, User } from '../models/post';
import * as postActions from '../actions/post';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export type Action = postActions.All;

export interface AppState {
  posts: Post[],
  comments: Comment[],
  users: User[]
}

export interface State extends EntityState<Post> { }
export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  selectId: (post: Post) => post.id,
  sortComparer: false
});
export const initialState: State = adapter.getInitialState();

export function postReducer(state = initialState, action: Action) {
  switch (action.type) {
    case postActions.LOAD_POSTS:
      return {
        ...state
      };

    case postActions.LOAD_POSTS_SUCCESS:
      return {
        ...adapter.addMany(action.payload, state)
      };

    case postActions.LOAD_POSTS_FAIL:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}
