export type Comment = {
  comment: string;
  username: string;
  image: string;
};
// Omit : FullPost 타입에서 'comments' 타입 제외하고 새로운 comments 타입 지정
export type SimplePost = Omit<FullPost, 'comments'> & {
  comments: number;
};

export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  text: string;
  createdAt: string;
  likes: string[];
  comments: Comment[];
};
