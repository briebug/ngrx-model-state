import { Action } from '@ngrx/store';

import { Comment } from '../models/comment';

export enum CommentActionTypes {
  Add = '[Comment] Add',
  Load = '[Comment] Load',
  LoadSuccess = '[Comment] Load Success',
  LoadFail = '[Comment] Load Fail',
  Save = '[Comment] Save',
  SaveSuccess = '[Comment] Save Success',
  SaveFail = '[Comment] Save Fail',
}

export class AddComment implements Action {
  readonly type = CommentActionTypes.Add;

  constructor(public postId: number, public payload: Comment) { }
}

export class LoadComments implements Action {
  readonly type = CommentActionTypes.Load;
}

export class LoadCommentsSuccess implements Action {
  readonly type = CommentActionTypes.LoadSuccess;

  constructor(public payload: Comment[]) { }
}

export class LoadCommentsFail implements Action {
  readonly type = CommentActionTypes.LoadFail;

  constructor(public payload?: any) { }
}

export class SaveComments implements Action {
  readonly type = CommentActionTypes.Save;

  constructor(public payload: Comment) { }
}

export class SaveCommentsSuccess implements Action {
  readonly type = CommentActionTypes.SaveSuccess;

  constructor(public payload: Comment) { }
}

export class SaveCommentsFail implements Action {
  readonly type = CommentActionTypes.SaveFail;

  constructor(public payload?: any) { }
}

export type CommentActions
  = AddComment
  | LoadComments
  | LoadCommentsSuccess
  | LoadCommentsFail
  | SaveComments
  | SaveCommentsSuccess
  | SaveCommentsFail;
