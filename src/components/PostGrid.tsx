import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';
import { SimplePost } from '@/model/post';
import PostGridCard from './PostGridCard';

interface Props {
  username: string;
  query: string;
}
const PostGrid = ({ username, query }: Props) => {
  const { data: posts, isLoading } = useSWR<SimplePost[]>(
    `/api/users/${username}/${query}`
  );

  return (
    <div className='w-full text-center'>
      {isLoading && <GridSpinner />}
      <ul className='grid grid-cols-3 gap-4 py-4 px-8'>
        {posts &&
          posts.map((post, i) => {
            return (
              <li key={post.id}>
                <PostGridCard post={post} priority={i < 6} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default PostGrid;
