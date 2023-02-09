import React from 'react';

import { SbBlokData, storyblokEditable } from '@storyblok/react';
import Navigation from '../Navigation';
import Typography from '../Typography';
import Product from '../Product';

const ProductSection = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className='bg-black pb-[97px]'>
        <div className=' max-w-[1110px]  mx-auto '>
          <div className='border-b mb-[98px] border-white/20 pt-8  pb-9'>
            <Navigation shoppingCart={true} />
          </div>

          <div className='text-white text-center'>
            <Typography as='h2' weight='font-bold' transform='capitalize'>
              {blok.heading}
            </Typography>
          </div>
        </div>
      </div>
      <div className='max-w-[1110px]  mx-auto '>
        {blok &&
          blok.products.map((product: any) => {
            return <Product key={product.name} product={product} />;
          })}
      </div>
    </div>
  );
};

export default ProductSection;
