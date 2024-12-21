type Comment = {
  id: string;
  content: string;
  createdAt: string;
  postId: string;
};

interface postCommentProps {
  contentId: string;
  comment: string;
}

interface CommentCreateResult {
  _id: string,
  comment: string,
  author: Author,
  post: string,
  createdAt: string,
  updatedAt: string,
  v_0: string
}