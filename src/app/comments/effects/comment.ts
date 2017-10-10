import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as commentActions from '../actions/comment';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment';

export type Action = commentActions.All;

@Injectable()
export class PostEffects {
  constructor(private actions: Actions,
    private commentSvc: CommentService) {
  }

  @Effect()
  savePost: Observable<Action> = this.actions.ofType(commentActions.SAVE_COMMENT)
    .map((action: commentActions.SaveComments) => action.payload)
    .switchMap((comment: Comment) => this.commentSvc.save(comment))
    .map((comment: Comment) => { return new commentActions.SaveCommentsSuccess(comment)})
    .catch(err => of(new commentActions.SaveCommentsFail({ error: err.message })));
}
