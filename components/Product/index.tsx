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
    desktop_image,
    tablet_image,
    mobile_image,
  } = product.content as SbBlokData & ProductDetailStoryblok;

  const resolvedLink = resolveLink(link);

  return (
    <div
      {...storyblokEditable(product)}
      className={classNames(
        'flex flex-col lg:flex-row items-center gap-[32px] md:gap-[52px] lg:gap-[125px] mt-[64px] md:mt-[120px] lg:mt-40',
        reverse === 'reverse' && 'lg:flex-row-reverse'
      )}
    >
      {product.content && (
        <div>
          <Image
            src={desktop_image?.filename as string}
            width={540}
            height={560}
            alt={name}
            className='object-cover rounded-lg hidden lg:block'
          />
          <Image
            src={tablet_image?.filename as string}
            width={889}
            height={352}
            alt={name}
            className='object-cover rounded-lg hidden md:block lg:hidden'
          />
          <Image
            src={mobile_image?.filename as string}
            width={600}
            height={560}
            alt={name}
            className='object-cover md:hidden rounded-lg'
          />
        </div>
      )}

      <div className='text-center lg:text-left lg:w-[445px]'>
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
          <p className='text-xs font-medium'>{description}</p>
        </div>
        <div className='text-white'>
          <Button
            bg='bg-brand-amber'
            hover='hover:bg-brand-pastelYellow'
            link={resolvedLink}
            block={false}
          >
            see product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
