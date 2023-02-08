import React from 'react';

import { SbBlokData, storyblokEditable } from '@storyblok/react';
import Navigation from '../Navigation';
import Typography from '../Typography';
import Image from 'next/image';
import Button from '../Button';

const ProductSection = ({ blok }: any) => {
  console.log(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <div className='bg-black pb-[97px]'>
        <div className=' max-w-[1110px]  mx-auto '>
          <div className='border-b mb-[98px] border-white/20 pt-8  pb-9'>
            <Navigation shoppingCart={true} />
          </div>

          <div className='text-white text-center'>
            <Typography as='h2' weight='font-bold'>
              {blok.heading}
            </Typography>
          </div>
        </div>
      </div>

      <div className='max-w-[1110px]  mx-auto mt-40'>
        {blok &&
          blok.products.map((product: any) => {
            return (
              <div key={product.name} className='flex items-center gap-[125px]'>
                <div>
                  <Image
                    src={`https://${product.image}`}
                    width={540}
                    height={560}
                    alt='iad'
                  />
                </div>

                <div className='w-[445px]'>
                  {product.new && (
                    <div className='mb-4 text-brand-amber'>
                      <Typography
                        as='p'
                        transform='uppercase'
                        weight='font-normal'
                      >
                        new product
                      </Typography>
                    </div>
                  )}
                  <div className='mb-8'>
                    <Typography as='h2' weight='font-bold'>
                      {product.name}
                    </Typography>
                  </div>
                  <div className='mb-10 opacity-50'>
                    <Typography as='small' weight='font-medium'>
                      {product.description}
                    </Typography>
                  </div>
                  <div className='text-white'>
                    <Button bg='brand-amber' hover='brand-pastelYellow' />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductSection;
