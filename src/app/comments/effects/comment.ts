import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { CommentActionTypes, CommentActions } from '../actions/comment';
import * as commentActions from '../actions/comment';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment';

@Injectable()
export class CommentEffects {
  constructor(private actions: Actions,
    private commentSvc: CommentService) {
  }

  @Effect()
  loadAll: Observable<CommentActions> = this.actions.ofType(CommentActionTypes.Load)
    .switchMap(() => this.commentSvc.loadAll())
    .map(comments => new commentActions.LoadCommentsSuccess(comments))
    .catch(err => of(new commentActions.LoadCommentsFail({ error: err.message })));

  @Effect()
  saveComment: Observable<CommentActions> = this.actions.ofType(CommentActionTypes.Save)
    .map((action: commentActions.SaveComments) => action.payload)
    .switchMap((comment: Comment) => this.commentSvc.save(comment))
    .map((comment: Comment) => new commentActions.SaveCommentsSuccess(comment))
    .catch(err => of(new commentActions.SaveCommentsFail({ error: err.message })));
}
