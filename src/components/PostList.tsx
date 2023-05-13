'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import PostListCard from './PostListCard';
import GridSpinner from './ui/GridSpinner';

const PostList = () => {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>('/api/posts');

  return (
    <section>
      {isLoading && (
        <div className='text-center mt-32'>
          <GridSpinner color='#eb8f8f' />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, i) => {
            return (
              <li key={post.id} className='mb-4'>
                <PostListCard post={post} priority={i < 2} />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
export default PostList;
