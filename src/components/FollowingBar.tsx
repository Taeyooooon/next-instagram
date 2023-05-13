'use client';

import { DetailUser } from '@/model/user';
import useSWR from 'swr';
import { BeatLoader } from 'react-spinners';
import Link from 'next/link';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';

const FollowingBar = () => {
  const { data, error, isLoading } = useSWR<DetailUser>('/api/me');

  const users = data?.following;

  return (
    <section className='w-full flex justify-center items-center p-4 shadow-md shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto'>
      {isLoading ? (
        <BeatLoader color='#d77ea8' size={8} />
      ) : (
        (!users || users.length === 0) && <p>{`You Don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              href={`/user/${username}`}
              key={username}
              className='flex flex-col items-center w-20'
            >
              <Avatar image={image} highlight />
              <p className='w-full text-sm text-center text-ellipsis overflow-hidden'>
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
};
export default FollowingBar;
