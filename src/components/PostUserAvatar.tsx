import Avatar from './Avatar';

interface Props {
  userImage: string;
  username: string;
}

const PostUserAvatar = ({ userImage, username }: Props) => {
  return (
    <>
      <div className='flex items-center p-2'>
        <Avatar image={userImage} size='medium' highlight />
        <span className=' text-gray-900 font-bold ml-2'>{username}</span>
      </div>
    </>
  );
};
export default PostUserAvatar;
