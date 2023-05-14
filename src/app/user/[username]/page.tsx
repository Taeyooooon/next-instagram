import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import UserPosts from '@/components/UserPosts';
import UserProfile from '@/components/UserProfile';
import { getUserForProfile } from '@/service/user';
import { cache } from 'react';

interface Props {
  params: { username: string };
}
// 컴포넌트와 메타데이터 생성에서 발생하는 2번의 네트워크 통신을 캐시로 관리
const getUser = cache(async (username: string) => getUserForProfile(username));

const UserPage = async ({ params: { username } }: Props) => {
  const user = await getUser(username);
  if (!user) {
    notFound();
  }
  return (
    <section className='w-full'>
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
};
export default UserPage;

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username);

  return {
    title: `${user?.name} (@${user?.username}) ・ Instagram Photos`,
    description: `${user?.name}'s Instagram Photos`,
  };
}
