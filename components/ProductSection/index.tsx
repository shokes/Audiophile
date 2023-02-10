import React from 'react';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import Navigation from '../Navigation';
import Typography from '../Typography';
import Product from '../Product';
import { ProductSectionStoryblok } from '@/@types/generated/storyblok';

interface ProductSectionProps {
  blok: SbBlokData & ProductSectionStoryblok;
}

const ProductSection = ({ blok }: ProductSectionProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className='bg-black pb-[97px]'>
        <div className=' max-w-[1110px]  mx-auto '>
          <div className='border-b mb-[98px] border-white/20 pt-8  pb-9'>
            <Navigation shoppingCart={true} />
          </div>
          <div className='text-white text-center'>
            <Typography as='h2' weight='font-bold' transform='uppercase'>
              {blok.heading}
            </Typography>
          </div>
        </div>
      </div>
      <div className='max-w-[1110px]  mx-auto'>
        {blok.products &&
          blok.products.map((product) => {
            return <Product key={product.name} product={product} />;
          })}
      </div>
    </div>
  );
};

export default ProductSection;
