import { searchUsers } from '@/service/user';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; 
// request를 안받고있기 때문에 next가 ssg 페이지로 변환하는걸 막기 위한 옵션

export async function GET() {
  return searchUsers().then((data) => NextResponse.json(data));
}
