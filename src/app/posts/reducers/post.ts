import { Post } from '../models/post';
import * as postActions from '../actions/post';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export type Action = postActions.All;

export interface AppState {
  posts: Post[]
}

export function postReducer(state: Post[] = [], action: Action) {
  switch (action.type) {
    case postActions.LOAD_POSTS:
      return [...state];

    case postActions.LOAD_POSTS_SUCCESS:
      return [...state, ...action.payload];

    case postActions.LOAD_POSTS_FAIL:
      return [...state, ...action.payload];

    case postActions.ADD_COMMENT:
      return state.map((post) => {
        if (post.id === action.id) {
          post.comments = post.comments.map((comment) => {
            return comment;
          }).concat(action.payload);
        }

        return post;
      });

    default:
      return state;
  }
}
