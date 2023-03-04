import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import classNames from 'classnames';
import Typography from '../Typography';
import { storyblokEditable, SbBlokData } from '@storyblok/react';
import { ProductStoryblok } from '@/@types/generated/storyblok';
import { ProductDetailStoryblok } from '@/@types/generated/storyblok';
import { resolveLink } from '@/utils/storyblok/resolveLinks';

interface ProductProps {
  product: SbBlokData & ProductStoryblok;
}

const Product = ({ product }: ProductProps) => {
  const {
    reverse,
    image1,
    name,
    new: newProduct,
    category,
    description,
    link,
  } = product.content as SbBlokData & ProductDetailStoryblok;

  const resolvedLink = resolveLink(link);

  return (
    <div
      {...storyblokEditable(product)}
      className={classNames(
        'flex items-center gap-[125px] mt-40',
        reverse === 'reverse' && 'flex-row-reverse'
      )}
    >
      {image1 && (
        <Image
          src={image1.filename}
          width={540}
          height={560}
          alt={name}
          className='object-cover rounded-lg'
        />
      )}

      <div className='w-[445px]'>
        {newProduct && (
          <div className='mb-4 text-brand-amber'>
            <Typography as='p' transform='uppercase' weight='font-normal'>
              new product
            </Typography>
          </div>
        )}
        <div>
          <Typography as='h2' weight='font-bold' transform='uppercase'>
            {name}
          </Typography>
        </div>
        <div className='mb-8'>
          <Typography as='h2' weight='font-bold' transform='uppercase'>
            {category}
          </Typography>
        </div>
        <div className='mb-10 opacity-50'>
          <Typography as='small' weight='font-medium'>
            {description}
          </Typography>
        </div>
        <div className='text-white'>
          <Button
            bg='brand-amber'
            hover='brand-pastelYellow'
            link={resolvedLink}
          >
            see product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
