'use client';
import { HomeUser, ProfileUser } from '@/model/user';
import userSWR from 'swr';
import Button from './ui/Button';

interface Props {
  user: ProfileUser;
}

const FollowButton = ({ user }: Props) => {
  const { username } = user;
  const { data: loggedInUser } = userSWR<HomeUser>('/api/me');
  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);

  const text = following ? 'UnFollow' : 'Follow';
  return (
    <p>
      {showButton && (
        <Button text={text} onClick={() => {}} red={text === 'UnFollow'} />
      )}
    </p>
  );
};
export default FollowButton;
