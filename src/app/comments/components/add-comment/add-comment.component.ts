import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Post, User } from '../../../posts/models/post';
import { AppState } from '../../../posts/reducers/post';
import * as commentActions from '../../actions/comment';
import { Comment } from '../..//models/comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() postId: number;

  newComment: string;
  id: number = 1;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addComment() {
    this.id++;

    let user: User = { id: 1, name: 'Joe User' },
      comment: Comment = { id: this.id, postId: this.postId, comment: this.newComment, author: user };

    this.store.dispatch(new commentActions.AddComment(this.postId, comment));

    this.newComment = '';
  }
}
