import FeatureItem from '@/components/FeatureItem';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeatureItem />
      <Footer />
    </Fragment>
  );
}
