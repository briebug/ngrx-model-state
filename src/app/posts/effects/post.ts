import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { PostActionTypes } from '../actions/post';
import * as postActions from '../actions/post';
import * as commentActions from '../../comments/actions/comment';
import { Post } from '../models/post';
import { PostService } from '../services/post';

@Injectable()
export class PostEffects {
  constructor(private actions: Actions,
    private postSvc: PostService) {
  }

  // Splitter action to load posts and comments
  @Effect() loadPosts = this.actions.ofType(PostActionTypes.LoadPostsComments)
    .flatMap(add => [
      new postActions.LoadPosts(),
      new commentActions.LoadComments()
    ]);

  @Effect()
  loadAllPosts: Observable<Action> = this.actions.ofType(PostActionTypes.Load)
    .switchMap(() => this.postSvc.loadAll())
    .map(posts => new postActions.LoadPostsSuccess(posts))
    .catch(err => of(new postActions.LoadPostsFail({ error: err.message })));

  @Effect()
  savePost: Observable<Action> = this.actions.ofType(PostActionTypes.Save)
    .map((action: postActions.SavePosts) => action.payload)
    .switchMap((post: Post) => this.postSvc.save(post))
    .map(posts => new postActions.SavePostsSuccess(posts))
    .catch(err => of(new postActions.SavePostsFail({ error: err.message })));
}
