import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { PostEffects } from './posts/effects/post';
import { postReducer } from './posts/reducers/post';
import { PostService } from './posts/services/post';


import { CommentEffects } from './comments/effects/comment';
import { commentReducer } from './comments/reducers/comment';
import { CommentService } from './comments/services/comment';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/containers/posts.component';
import { PostComponent } from './posts/components/post/post.component';
import { CommentsListComponent } from './comments/components/comments-list/comments-list.component';
import { CommentComponent } from './comments/components/comment/comment.component';
import { AddCommentComponent } from './comments/components/add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CommentsListComponent,
    CommentComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    StoreModule.forRoot({
      posts: postReducer,
      comments: commentReducer
    }),
    EffectsModule.forRoot([PostEffects, CommentEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
