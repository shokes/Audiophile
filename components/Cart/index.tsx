import React from 'react';
import Typography from '../Typography';
import headphones from '../../public/image-xx99-mark-two-headphones.jpg';
import Image from 'next/image';
import Button from '../Button';

const Cart = () => {
  return (
    <div className='text-black bg-white py-[31px]  px-[33px] rounded-lg shadow-lg w-[377px]'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <Typography as='h6' weight='font-bold' transform='uppercase'>
            cart (3)
          </Typography>
        </div>
        <div className='opacity-50 underline'>
          <Typography as='xsmall'>Remove all</Typography>
        </div>
      </div>
      <div className='flex mb-6 items-center'>
        <Image
          src={headphones}
          width={64}
          height={64}
          alt='headphones'
          className='rounded-lg mr-4'
        />
        <div className='flex justify-between w-full'>
          <div className='flex flex-col'>
            <span>
              <Typography as='xsmall' weight='font-bold'>
                XX99 MK II
              </Typography>
            </span>
            <span className='opacity-50'>
              <Typography as='p2' weight='font-bold'>
                $2,999
              </Typography>
            </span>
          </div>
          <div className='bg-brandGray-200 px-[52px] py-[15px] '>1</div>
        </div>
      </div>
      <div className='flex mb-6 items-center'>
        <Image
          src={headphones}
          width={64}
          height={64}
          alt='headphones'
          className='rounded-lg mr-4'
        />
        <div className='flex justify-between w-full'>
          <div className='flex flex-col'>
            <span>
              <Typography as='xsmall' weight='font-bold'>
                XX99
              </Typography>
            </span>
            <span className='opacity-50'>
              <Typography as='p2' weight='font-bold'>
                $2,999
              </Typography>
            </span>
          </div>
          <div className='bg-brandGray-200 px-[52px] py-[15px] '>1</div>
        </div>
      </div>
      <div className='flex mb-6 items-center'>
        <Image
          src={headphones}
          width={64}
          height={64}
          alt='headphones'
          className='rounded-lg mr-4'
        />
        <div className='flex justify-between w-full'>
          <div className='flex flex-col'>
            <span>
              <Typography as='xsmall' weight='font-bold'>
                XX99 MK II
              </Typography>
            </span>
            <span className='opacity-50'>
              <Typography as='p2' weight='font-bold'>
                $2,999
              </Typography>
            </span>
          </div>
          <div className='bg-brandGray-200 px-[52px] py-[15px] '>1</div>
        </div>
      </div>
      <div className='flex justify-between mb-8'>
        <span className='opacity-50'>
          <Typography as='p2' weight='font-bold' transform='uppercase'>
            total
          </Typography>
        </span>
        <span>000</span>
      </div>
      <div className='text-center text-white'>
        <Button bg='brand-amber' hover='brand-pastelYellow' link='/'>
          checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
