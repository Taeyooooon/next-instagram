import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata : Metadata = {
  title: {
    default :'Instagram',
    template : 'Instagram | %s'
  },
  description: 'Instagram',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={openSans.className}>
      <body className='w-full overflow-auto bg-neutral-50'>
        <AuthContext>
          <header className='sticky top-0 bg-white z-10 border-b'>
            <div className='max-w-screen-xl mx-auto'>
              <Nav />
            </div>
          </header>
          <main className='w-full flex justify-center max-w-screen-xl mx-auto'>
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
        <div id='portal'></div>
      </body>
    </html>
  );
}
