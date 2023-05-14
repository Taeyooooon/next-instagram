import { AuthUser } from '@/model/user';
import Avatar from './Avatar';

interface Props {
  user: AuthUser;
}
const SideBar = ({ user: { name, username, email, image } }: Props) => {
  return (
    <>
      <div className='flex items-center'>
        {image && <Avatar image={image} />}
        <div className='ml-4'>
          <p className='font-bold'>{username}</p>
          <p className='text-lg text-neutral-500 leading-4 '>{name}</p>
        </div>
      </div>
      <p className='text-sm text-neutral-500 mt-8'>
        About · Help · Privacy · Terms · API · Language
      </p>
      <p className='font-bold text-sm mt-8 text-neutral-500'>
        @Copyright INSTAGRAM from META
      </p>
    </>
  );
};
export default SideBar;
