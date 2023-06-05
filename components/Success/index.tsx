import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import Typography from '../Typography';
import { addCommas } from '@/utils/general';
import Image from 'next/image';
import Button from '../Button';
import ModalLayout from '../ModalLayout';
import { useEffect, useState } from 'react';
import { deleteAllProductsInCart } from '@/redux/features/homeSlice';
import { useDispatch } from 'react-redux';

interface SuccessProps {
  cart: [];
  grandTotal: number;
}

const Success = ({ cart, grandTotal }: SuccessProps) => {
  const [successCart, setSuccessCart] = useState<any>([]);
  const dispatch = useDispatch();

  const [viewMore, setViewMore] = useState(true);

  useEffect(() => {
    setSuccessCart(cart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalLayout position='center'>
      <div className='bg-white  shadow-2xl inline-block mt-5 p-[48px] rounded-lg  '>
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
        <div className='flex flex-col md:flex-row'>
          <div className='bg-brandGray-200  rounded-t-lg md:rounded-l-lg  md:rounded-r-none py-[17px] px-[24px] w-full md:w-[246px] '>
            {' '}
            {viewMore ? (
              <div className='flex items-center '>
                <Image
                  src={successCart[0] && successCart[0].image}
                  width={64}
                  height={64}
                  alt='headphones'
                  className='rounded-lg mr-4 flex-none'
                />

                <div className='flex-auto '>
                  <div className='flex flex-col'>
                    <div>
                      <span className='text-xs font-bold text-black'>
                        {' '}
                        {successCart[0] && successCart[0].short}
                      </span>
                    </div>
                    {successCart[0] && (
                      <div className='opacity-50'>
                        <span className='text-base2 font-bold'>
                          $ {addCommas(successCart[0].price)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <p className='text-sm text-black opacity-50 flex-none font-bold'>
                  x{successCart[0] && successCart[0].quantity}
                </p>
              </div>
            ) : (
              successCart.map(
                (item: {
                  name: string;
                  image: string;
                  short: string;
                  price: number;
                  quantity: number;
                }) => {
                  return (
                    <div key={item.short} className='flex items-center'>
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
                            <span className='text-xs font-bold'>
                              {' '}
                              {item.short}
                            </span>
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
              )
            )}
            <div className='border-t-2 mt-[16px] pt-3 text-sm font-bold opacity-50  text-center'>
              {viewMore ? (
                <span
                  onClick={() => setViewMore(false)}
                  className='cursor-pointer'
                >
                  {successCart.length > 1
                    ? `and ${successCart.length - 1} other item(s)`
                    : ''}
                </span>
              ) : (
                <span
                  onClick={() => setViewMore(true)}
                  className='cursor-pointer'
                >
                  view less
                </span>
              )}
            </div>
          </div>
          <div className='bg-black py-[19px] md:py-0 text-white rounded-b-lg md:rounded-l-none md:rounded-r-lg inline-fle pl-[32px] w-full md:w-[198px] flex flex-col justify-center'>
            <div className='opacity-50 text-xs uppercase block '>
              Grand Total
            </div>

            <Typography as='h6' weight='font-bold'>
              $ {addCommas(grandTotal)}
            </Typography>
          </div>
        </div>
        <div
          className='text-white mt-[48px]'
          onClick={() => dispatch(deleteAllProductsInCart())}
        >
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
    </ModalLayout>
  );
};

export default Success;
