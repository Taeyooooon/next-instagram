import Signin from '@/components/Signin';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface Props {
  searchParams: {
    callbackUrl: string;
  };
}

const SigninPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  const providers = (await getProviders()) ?? {};

  return (
    <section className=' flex justify-center mt-24'>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  );
};
export default SigninPage;
