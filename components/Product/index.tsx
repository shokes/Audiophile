import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import classNames from 'classnames';
import Typography from '../Typography';

const Product = ({ product }: any) => {
  return (
    <div
      key={product.name}
      className={classNames(
        'flex items-center gap-[125px] mt-40',
        product.reverse === 'reverse' && 'flex-row-reverse'
      )}
    >
      <div>
        <Image
          src={`https://${product.image}`}
          width={540}
          height={560}
          alt='iad'
          className='object-cover rounded-lg'
        />
      </div>

      <div className='w-[445px]'>
        {product.new && (
          <div className='mb-4 text-brand-amber'>
            <Typography as='p' transform='uppercase' weight='font-normal'>
              new product
            </Typography>
          </div>
        )}
        <div>
          <Typography as='h2' weight='font-bold' transform='uppercase'>
            {product.name}
          </Typography>
        </div>
        <div className='mb-8'>
          <Typography as='h2' weight='font-bold' transform='uppercase'>
            {product.type}
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
};

export default Product;
