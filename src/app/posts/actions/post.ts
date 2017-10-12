import { Action } from '@ngrx/store';

import { Post } from '../models/post';
import { Comment } from '../../comments/models/comment';

export const LOAD_POSTS_COMMENTS ='[Post] Load posts and comments';
export const LOAD_POSTS = '[Post] Load posts';
export const LOAD_POSTS_SUCCESS = '[Post] Load posts success';
export const LOAD_POSTS_FAIL = '[Post] Load posts fail';

export const SAVE_POST = '[Post] Save post';
export const SAVE_POST_SUCCESS = '[Post] Save post success';
export const SAVE_POST_FAIL = '[Post] Save post fail';

export const ADD_COMMENT = '[Post] Add comment';

export class LoadPostsComments implements Action {
  readonly type = LOAD_POSTS_COMMENTS;

  constructor() { }
}

export class LoadPosts implements Action {
  readonly type = LOAD_POSTS;

  constructor() { }
}

export class LoadPostsSuccess implements Action {
  readonly type = LOAD_POSTS_SUCCESS;

  constructor(public payload: Post[]) { }
}

export class LoadPostsFail implements Action {
  readonly type = LOAD_POSTS_FAIL;

  constructor(public payload?: any) { }
}

export class SavePosts implements Action {
  readonly type = SAVE_POST;

  constructor(public payload: Post) { }
}

export class SavePostsSuccess implements Action {
  readonly type = SAVE_POST_SUCCESS;

  constructor(public payload: Post) { }
}

export class SavePostsFail implements Action {
  readonly type = SAVE_POST_FAIL;

  constructor(public payload?: any) { }
}

export type All
  = LoadPosts
  | LoadPostsSuccess
  | LoadPostsFail
  | SavePosts
  | SavePostsSuccess
  | SavePostsFail;
