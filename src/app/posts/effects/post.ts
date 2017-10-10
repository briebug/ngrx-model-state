import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as postActions from '../actions/post';
import { Post } from '../models/post';
import { PostService } from '../services/post';

export type Action = postActions.All;

@Injectable()
export class PostEffects {
  constructor(private actions: Actions,
    private postSvc: PostService) {
  }

  @Effect()
  loadAllPosts: Observable<Action> = this.actions.ofType(postActions.LOAD_POSTS)
    .switchMap(() => this.postSvc.loadAll())
    .map(posts => { return new postActions.LoadPostsSuccess(posts) })
    .catch(err => of(new postActions.LoadPostsFail({ error: err.message })));

  @Effect()
  savePost: Observable<Action> = this.actions.ofType(postActions.SAVE_POST)
    .map((action: postActions.SavePosts) => action.payload)
    .switchMap((post: Post) => this.postSvc.save(post))
    .map(posts => { return new postActions.SavePostsSuccess(posts) })
    .catch(err => of(new postActions.SavePostsFail({ error: err.message })));
}
