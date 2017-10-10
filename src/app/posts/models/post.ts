import { Action } from '@ngrx/store';
import { Comment } from '../../comments/models/comment';

export interface Post {
  id: number;
  title: string;
  description: string;
  comments: Comment[];
  author: User;
}

export interface User {
  id: number;
  name: string;
}
