import { Action } from '@ngrx/store';

import { User } from '../../posts/models/post';

export interface Comment {
  id: number;
  postId: number;
  comment: string;
  author: User;
}
