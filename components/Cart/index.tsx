import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';
import ModalLayout from '../ModalLayout';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Button from '../Button';
import { addCommas } from '@/utils/general';
import { ProductDetailStoryblok } from '@/@types/generated/storyblok';
import CartCounter from '../Counter/CartCounter';
import { deleteAllProductsInCart } from '@/redux/features/homeSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store: RootState) => store.home);

  const total = cart.reduce(
    (acc: number, item: { price: number; quantity: number }) => {
      const itemTotal = item.price * item.quantity;
      return acc + itemTotal;
    },
    0
  );

  return (
    <ModalLayout>
      <div className='text-black bg-white py-[31px]  px-[33px] rounded-lg shadow-lg w-[377px]'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <Typography as='h6' weight='font-bold' transform='uppercase'>
              cart ({cart.length})
            </Typography>
          </div>
          <div
            className='opacity-50 underline hover:text-brand-amber duration-300 cursor-pointer hover:opacity-100 '
            onClick={() => dispatch(deleteAllProductsInCart())}
          >
            <Typography as='xsmall'>Remove all</Typography>
          </div>
        </div>
        {cart.length === 0 ? (
          <div className='text-center'>
            <div className='mb-8'>
              <Typography as='xsmall' weight='font-bold'>
                Your Cart is Empty
              </Typography>
            </div>
            <div className='text-white'>
              <Button
                bg='bg-brand-amber'
                hover='hover:bg-brand-pastelYellow'
                block={true}
                link='/'
              >
                continue shopping
              </Button>
            </div>
          </div>
        ) : (
          cart.map(
            (item: {
              name: string;
              image: string;
              short: string;
              price: number;
              quantity: number;
            }) => {
              return (
                <div key={item.name}>
                  <div className='flex mb-6 items-center'>
                    <Image
                      src={item.image}
                      width={64}
                      height={64}
                      alt='headphones'
                      className='rounded-lg mr-4'
                    />

                    <div className='flex justify-between w-full items-center'>
                      <div className='flex flex-col'>
                        <span>
                          <Typography as='xsmall' weight='font-bold'>
                            {item.short}
                          </Typography>
                        </span>
                        <span className='opacity-50'>
                          <Typography as='p2' weight='font-bold'>
                            ${addCommas(item.price as number)}
                          </Typography>
                        </span>
                      </div>
                      <CartCounter
                        quantity={item.quantity}
                        short={item.short}
                      />
                    </div>
                  </div>
                </div>
              );
            }
          )
        )}
        {cart.length > 0 && (
          <div>
            <div className='flex justify-between mb-6'>
              <span className='opacity-50'>
                <Typography as='p2' weight='font-medium' transform='uppercase'>
                  total
                </Typography>
              </span>
              <span>
                <Typography as='h6' weight='font-bold'>
                  $ {addCommas(total)}
                </Typography>
              </span>
            </div>
            <div className='text-white'>
              <Button
                bg='bg-brand-amber'
                hover='hover:bg-brand-pastelYellow'
                block={true}
                link='/'
              >
                checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </ModalLayout>
  );
};

export default Cart;
