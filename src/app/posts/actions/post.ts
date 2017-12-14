import { Action } from '@ngrx/store';

import { Post } from '../models/post';

export enum PostActionTypes {
  LoadPostsComments = '[Post] Load Posts and Comments',
  Load = '[Post] Load',
  LoadSuccess = '[Post] Load Success',
  LoadFail = '[Post] Load Fail',
  Save = '[Post] Save',
  SaveSuccess = '[Post] Save Success',
  SaveFail = '[Post] Save Fail',
  Select = '[Post] Select'
}

export class LoadPostsComments implements Action {
  readonly type = PostActionTypes.LoadPostsComments;
}

export class LoadPosts implements Action {
  readonly type = PostActionTypes.Load;
}

export class LoadPostsSuccess implements Action {
  readonly type = PostActionTypes.LoadSuccess;

  constructor(public payload: Post[]) { }
}

export class LoadPostsFail implements Action {
  readonly type = PostActionTypes.LoadFail;

  constructor(public payload?: any) { }
}

export class SavePosts implements Action {
  readonly type = PostActionTypes.Save;

  constructor(public payload: Post) { }
}

export class SavePostsSuccess implements Action {
  readonly type = PostActionTypes.SaveSuccess;

  constructor(public payload: Post) { }
}

export class SavePostsFail implements Action {
  readonly type = PostActionTypes.SaveFail;

  constructor(public payload?: any) { }
}

export class Select implements Action {
  readonly type = PostActionTypes.Select;

  constructor(public payload: number) { }
}

export type PostActions
  = LoadPosts
  | LoadPostsSuccess
  | LoadPostsFail
  | SavePosts
  | SavePostsSuccess
  | SavePostsFail
  | Select;
