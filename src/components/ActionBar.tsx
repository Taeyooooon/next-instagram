import HeartIcon from './ui/icons/HeartIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import { formatDate } from '@/utils/date';

interface Props {
  likes: string[];
  text?: string;
  createdAt: string;
  username: string;
}

const ActionBar = ({ likes, text, createdAt, username }: Props) => {
  return (
    <>
      <div className='flex justify-between my-2 px-4'>
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className='px-4 py-1'>
        <p className='text-sm font-bold mb-2'>{`${likes?.length ?? 0} ${
          likes?.length > 1 ? 'likes' : 'like'
        }`}</p>
        {text && (
          <p>
            <span className='font-bold mr-1'>{username}</span>
            {text} 
          </p>
        )}
        <p className='text-xs text-neutral-900 uppercase my-2'>
          {formatDate(createdAt)}
        </p>
      </div>
    </>
  );
};
export default ActionBar;
