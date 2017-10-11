import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { PostEffects } from './posts/effects/post';
import { postReducer } from './posts/reducers/post';
import { PostService } from './posts/services/post';

import { commentReducer } from './comments/reducers/comment';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/containers/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PostComponent } from './posts/components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    StoreModule.forRoot({
      posts: postReducer,
      comments: commentReducer
    }),
    EffectsModule.forRoot([PostEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
