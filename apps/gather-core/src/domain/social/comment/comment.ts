export interface Comment {
  id: number;
  userId: number;
  postId: number;
  contents: string;
}

// Post: Comment = 1: N
// Comment: User = 1 : 1
// Comments : User = 1 : N
