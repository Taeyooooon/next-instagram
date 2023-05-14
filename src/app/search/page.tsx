import UserSearch from '@/components/UserSearch';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'User Search',
  description: 'Search for users',
};

const SearchPage = () => {
  return <UserSearch />;
};
export default SearchPage;
