import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      username: string; // username 타입 추가
    } & DefaultSession['user'];
  }
}
