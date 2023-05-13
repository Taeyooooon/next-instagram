import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { getFollowingPosts } from '@/service/post';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication required', { status: 401 });
  }

  return getFollowingPosts(user.username).then((data) =>
    NextResponse.json(data)
  );
}
