import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Teaser from '@/components/Teaser';
import Page from '@/components/Page';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import { Manrope } from '@next/font/google';
import Feature from '@/components/Feature';
import HomeProductOne from '@/components/HomeProductOne';
import HomeProductTwo from '@/components/HomeProductTwo';

const components = {
  teaser: Teaser,
  page: Page,
  hero: Hero,
  feature_section: FeatureSection,
  feature: Feature,
  home_product_one: HomeProductOne,
  home_product_two: HomeProductTwo,
};

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

storyblokInit({
  accessToken: '1sTj4AJrYMXEamEVPocEAwtt',
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${manrope.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
