import React from 'react';
import Typography from '../Typography';
import headphones from '../../public/image-xx99-mark-two-headphones.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Counter from '../Counter';
import ModalLayout from '../ModalLayout';

const Cart = () => {
  return (
    <ModalLayout>
      <div className='text-black bg-white py-[31px]  px-[33px] rounded-lg shadow-lg w-[377px]'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <Typography as='h6' weight='font-bold' transform='uppercase'>
              cart (3)
            </Typography>
          </div>
          <div className='opacity-50 underline hover:text-brand-amber duration-300 cursor-pointer hover:opacity-100 '>
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
          <div className='flex justify-between w-full items-center'>
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
            <Counter
              paddingX='px-[11.5px]'
              paddingY='py-[7px]'
              gap='gap-[13px]'
            />
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
          <div className='flex justify-between w-full items-center'>
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
            <Counter
              paddingX='px-[11.5px]'
              paddingY='py-[7px]'
              gap='gap-[13px]'
            />
          </div>
        </div>
        <div className='flex mb-8 items-center'>
          <Image
            src={headphones}
            width={64}
            height={64}
            alt='headphones'
            className='rounded-lg mr-4'
          />
          <div className='flex justify-between w-full items-center'>
            <div className='flex flex-col'>
              <span>
                <Typography as='xsmall' weight='font-bold'>
                  YX1
                </Typography>
              </span>
              <span className='opacity-50'>
                <Typography as='p2' weight='font-bold'>
                  $2,999
                </Typography>
              </span>
            </div>
            <Counter
              paddingX='px-[11.5px]'
              paddingY='py-[7px]'
              gap='gap-[13px]'
            />
          </div>
        </div>
        <div className='flex justify-between mb-6'>
          <span className='opacity-50'>
            <Typography as='p2' weight='font-medium' transform='uppercase'>
              total
            </Typography>
          </span>
          <span>000</span>
        </div>
        {/* <div className=' text-white '>
        <Button bg='brand-amber' hover='brand-pastelYellow' link='/'>
          checkout
        </Button>
      </div> */}
        <div className='bg-brand-amber duration-300 text-center uppercase cursor-pointer py-[15px] text-sm font-bold text-white hover:bg-brand-pastelYellow '>
          <Link href='/'>checkout</Link>
        </div>
      </div>
    </ModalLayout>
  );
};

export default Cart;
