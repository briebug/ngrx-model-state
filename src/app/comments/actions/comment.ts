import { Action } from '@ngrx/store';

import { Comment } from '../models/comment';

export const ADD_COMMENT ='[Comment] Add comment';
export const LOAD_COMMENTS ='[Comment] Load comments';
export const LOAD_COMMENTS_SUCCESS ='[Comment] Load comments success';
export const LOAD_COMMENTS_FAIL ='[Comment]Load comments fail';
export const SAVE_COMMENT ='[Comment] Save comment';
export const SAVE_COMMENT_SUCCESS ='[Comment] Save comment success';
export const SAVE_COMMENT_FAIL ='[Comment] Save comment fail';


export class AddComment implements Action {
  readonly type = ADD_COMMENT;

  constructor(public postId: number, public payload: Comment) { }
}

export class LoadComments implements Action {
  readonly type = LOAD_COMMENTS;

  constructor() { }
}

export class LoadCommentsSuccess implements Action {
  readonly type = LOAD_COMMENTS_SUCCESS;

  constructor(public payload: Comment[]) { }
}

export class LoadCommentsFail implements Action {
  readonly type = LOAD_COMMENTS_FAIL;

  constructor(public payload?: any) { }
}

export class SaveComments implements Action {
  readonly type = SAVE_COMMENT;

  constructor(public payload: Comment) { }
}

export class SaveCommentsSuccess implements Action {
  readonly type = SAVE_COMMENT_SUCCESS;

  constructor(public payload: Comment) {}
}

export class SaveCommentsFail implements Action {
  readonly type = SAVE_COMMENT_FAIL;

  constructor(public payload?: any) { }
}

export type All
= AddComment
| LoadComments
| LoadCommentsSuccess
| LoadCommentsFail
| SaveComments
| SaveCommentsSuccess
| SaveCommentsFail;
