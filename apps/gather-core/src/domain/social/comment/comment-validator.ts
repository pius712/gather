import { Comment } from './comment';
import { CoreError } from '../../../support/core-error';

export class CommentValidator {
  canModify(comment: Comment, userId: number) {
    if (comment.userId !== userId) {
      throw new CoreError();
    }
  }
}
