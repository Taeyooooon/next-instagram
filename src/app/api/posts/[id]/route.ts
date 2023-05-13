import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { getFollowingPosts, getPost } from '@/service/post';

interface Context {
  params: { id: string };
}

export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication required', { status: 401 });
  }

  return getPost(context.params.id).then((data) => NextResponse.json(data));
}
