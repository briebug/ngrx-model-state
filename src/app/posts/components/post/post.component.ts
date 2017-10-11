import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Post, User } from '../../models/post';
import * as postActions from '../../actions/post';
import { Comment } from '../../../comments/models/comment';
import { AppState } from '../../reducers/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() posts: Post[];
  newComment: string;
  id: number = 1;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addComment() {
    this.id++;

    let user: User = {id: 1, name: 'Jesse Sanders'},
      comment: Comment = {id: this.id, comment: this.newComment, author: user};

    this.store.dispatch(new postActions.AddComment(this.posts[0].id, comment));

    this.newComment = '';
  }
}
