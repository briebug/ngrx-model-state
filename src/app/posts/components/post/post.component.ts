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

  constructor(private store: Store<AppState>) { }

  ngOnInit() {}
}
