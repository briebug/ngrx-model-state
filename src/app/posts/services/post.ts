import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from '../models/post';

@Injectable()
export class PostService {
  constructor(private http: Http) { }

  loadAll(): Observable<Post[]> {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

  load(id): Observable<Post> {
    return this.http.get('/api/posts/' + id)
      .map(res => res.json());
  }

  save(post) {
    if (post.id === 0) {
      return this.http.post('/api/posts', post)
        .map(res => res.json());
    } else {
      return this.http.put('/api/posts/' + post.id, post)
        .map(res => res.json());
    }
  }

  delete(post) {
    return this.http.delete('/api/posts/' + post.id)
      .map(res => post);
  }
}
