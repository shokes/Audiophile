import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import classNames from 'classnames';
import Typography from '../Typography';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import {
  ProductDetailStoryblok,
  ProductStoryblok,
} from '@/@types/generated/storyblok';
import Link from 'next/link';

interface ProductProps {
  product: SbBlokData & ProductStoryblok;
}

// !to fix typings later

const Product = ({ product }: any) => {
  return (
    <div
      {...storyblokEditable(product)}
      key={product?.content?.name}
      className={classNames(
        'flex items-center gap-[125px] mt-40',
        product?.content?.reverse === 'reverse' && 'flex-row-reverse'
      )}
    >
      <div>
        <Image
          src={product.content.image1?.filename}
          width={540}
          height={560}
          alt={product?.content?.name}
          className='object-cover rounded-lg'
        />
      </div>

      <div className='w-[445px]'>
        {product.content.new && (
          <div className='mb-4 text-brand-amber'>
            <Typography as='p' transform='uppercase' weight='font-normal'>
              new product
            </Typography>
          </div>
        )}
        <div>
          <Typography as='h2' weight='font-bold' transform='uppercase'>
            {product.content.name}
          </Typography>
        </div>
        <div className='mb-8'>
          <Typography as='h2' weight='font-bold' transform='uppercase'>
            {product.content.category}
          </Typography>
        </div>
        <div className='mb-10 opacity-50'>
          <Typography as='small' weight='font-medium'>
            {product.content.description}
          </Typography>
        </div>
        <div className='text-white'>
          <Button
            bg='brand-amber'
            hover='brand-pastelYellow'
            content='see product'
            link={`${product.content.category}/${product.content.slug}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
