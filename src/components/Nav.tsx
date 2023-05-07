'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import ColorButton from './ui/ColorButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from './Avatar';

const menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

const Nav = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className='flex justify-between items-center px-6'>
      <Link href={'/'}>
        <h1 className='text-3xl font-bold'>Instagram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {menu.map(({ href, icon, clickedIcon }) => (
            <Link href={href} key={href}>
              {pathname === href ? clickedIcon : icon}
            </Link>
          ))}
          {user && (
            <li>
              <Link href={`user/${user.username}`}>
                <Avatar image={user.image} />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text='Sign Out' onClick={() => signOut()} />
            ) : (
              <ColorButton text='Sign In' onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
