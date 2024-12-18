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