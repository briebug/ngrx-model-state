import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from '../models/post';
import * as fromPosts from '../reducers/post';
import * as postSelectors from '../reducers';
import * as postActions from '../actions/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<fromPosts.AppState>) {
    this.posts$ = this.store.select(postSelectors.selectAllPosts);
  }

  ngOnInit() {
    this.store.dispatch(new postActions.LoadPosts());
  }
}
