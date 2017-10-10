import { Action } from '@ngrx/store';

import { Comment } from '../models/comment';

export const SAVE_COMMENT ='[Comment] Save comment';
export const SAVE_COMMENT_SUCCESS ='[Comment] Save comment success';
export const SAVE_COMMENT_FAIL ='[Comment] Save comment fail';


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
= SaveComments
| SaveCommentsSuccess
| SaveCommentsFail;
