import { Inter } from '@next/font/google';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <p className='text-red-500'>ttttt</p>
      <Footer />
    </Fragment>
  );
}
