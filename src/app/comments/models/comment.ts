import { Action } from '@ngrx/store';

import { User } from '../../posts/models/post';

export interface Comment {
  id: number;
  comment: string;
  author: User;
}
