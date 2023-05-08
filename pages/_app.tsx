import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from '@/components/Page';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import { Manrope } from '@next/font/google';
import Feature from '@/components/Feature';
import HomeProductOne from '@/components/HomeProductOne';
import HomeProductTwo from '@/components/HomeProductTwo';
import HomeProductThree from '@/components/HomeProductThree';
import HomeProductFour from '@/components/HomeProductFour';
import Product from '@/components/Product';
import ProductSection from '@/components/ProductSection';
import ProductDetail from '@/components/ProductDetail';
import InBox from '@/components/InBox';
import Like from '@/components/Like';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import CheckOutForm from '@/components/CheckOutForm';
import Progressbar from '@/components/ProgressBar';
import { LenisProvider } from '../context/LenisContext';
import { useIsTouchDevice } from '@/hooks/useTouchDevice';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import useMouse from '@react-hook/mouse-position';

const useVariants = (ref: React.MutableRefObject<null>) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: '20px',
      backgroundColor: '#d87d4a',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
  };
};

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 28,
};

const components = {
  page: Page,
  hero: Hero,
  feature_section: FeatureSection,
  feature: Feature,
  home_product_one: HomeProductOne,
  home_product_two: HomeProductTwo,
  home_product_three: HomeProductThree,
  home_product_four: HomeProductFour,
  product: Product,
  product_section: ProductSection,
  product_detail: ProductDetail,
  like: Like,
  in_box: InBox,
  check_out_form: CheckOutForm,
};

storyblokInit({
  // accessToken: '1sTj4AJrYMXEamEVPocEAwtt',
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export default function App({ Component, pageProps }: AppProps) {
  const isTouchDevice = useIsTouchDevice();

  const ref = useRef(null);

  const variants = useVariants(ref);

  return (
    <main className={`${manrope.variable} font-sans`} ref={ref}>
      <Provider store={store}>
        <LenisProvider>
          {!isTouchDevice && (
            <motion.div
              variants={variants}
              className='fixed z-[9999] top-0 left-0 rounded-full'
              animate='default'
              transition={spring}
            >
              <span className='cursor'></span>
            </motion.div>
          )}

          {!isTouchDevice && <Progressbar />}
          <Component {...pageProps} />
        </LenisProvider>
      </Provider>
    </main>
  );
}
