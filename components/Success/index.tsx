import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import Typography from '../Typography';
import { addCommas } from '@/utils/general';
import Image from 'next/image';
import Button from '../Button';

interface SuccessProps {
  cart: [];
  grandTotal: number;
}

const Success = ({ cart, grandTotal }: SuccessProps) => {
  return (
    <div className='bg-white w-[540px] shadow-2xl inline-block mt-5 p-[48px] rounded-lg  '>
      <div className='mb-[33px]'>
        <IoMdCheckmark className='w-[64px] h-[64px] text-white flex justify-center p-[14px] items-center rounded-full bg-amber-700' />
      </div>
      <div className='mb-6'>
        <Typography as='h3' weight='font-bold'>
          THANK YOU <br />
          FOR YOUR ORDER
        </Typography>
      </div>

      <p className='text-xs opacity-50 mb-[33px]'>
        You will receive an email confirmation shortly.
      </p>
      <div className='flex'>
        <div className='bg-brandGray-200 rounded-l-lg  py-[17px] px-[24px] w-[246px] '>
          {' '}
          {cart.map(
            (item: {
              name: string;
              image: string;
              short: string;
              price: number;
              quantity: number;
            }) => {
              return (
                <div key={item.short} className='flex '>
                  <Image
                    src={item.image}
                    width={64}
                    height={64}
                    alt='headphones'
                    className='rounded-lg mr-4 flex-none'
                  />

                  <div className='flex-auto '>
                    <div className='flex flex-col'>
                      <div>
                        <span className='text-xs font-bold'> {item.short}</span>
                      </div>
                      <div className='opacity-50'>
                        <span className='text-base2 font-bold'>
                          $ {addCommas(item.price as number)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className='text-sm text-black opacity-50 flex-none font-bold'>
                    x{item.quantity}
                  </p>
                </div>
              );
            }
          )}
          <div className='border-t-2 mt-[16px] pt-3 text-sm font-bold opacity-50  text-center'>
            View more
          </div>
        </div>
        <div className='bg-black text-white rounded-r-lg flex flex-col pl-[32px] w-[198px] pt-[121px]'>
          <span className='opacity-50 text-xs uppercase mb-[8px] '>
            Grand Total
          </span>

          <Typography as='h6' weight='font-bold'>
            $ {addCommas(grandTotal)}
          </Typography>
        </div>
      </div>
      <div className='text-white mt-[48px]'>
        <Button
          bg='bg-brand-amber'
          hover='hover:bg-brand-pastelYellow'
          width={true}
          link='/'
        >
          back to home
        </Button>
      </div>
    </div>
  );
};

export default Success;
