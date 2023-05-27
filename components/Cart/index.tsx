import React from 'react';
import ModalLayout from '../ModalLayout';
import Typography from '../Typography';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Button from '../Button';
import { addCommas } from '@/utils/general';
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
    <ModalLayout position='end'>
      <div className='text-black bg-white py-[31px] px-[33px]  rounded-lg '>
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
            <span className='text-xs'>Remove all</span>
          </div>
        </div>
        {cart.length === 0 ? (
          <div className='text-center'>
            <div className='mb-8'>
              <span className='text-xs font-bold'> Your Cart is Empty</span>
            </div>
            <div className='text-white'>
              <Button
                bg='bg-brand-amber'
                hover='hover:bg-brand-pastelYellow'
                width={true}
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
                <div key={item.short}>
                  <div className='flex mb-6 items-center'>
                    <Image
                      src={item.image}
                      width={64}
                      height={64}
                      alt='headphones'
                      className='rounded-lg mr-4'
                    />

                    <div className='flex justify-between w-full items-center gap-[55px]'>
                      <div className='flex flex-col'>
                        <div>
                          <span className='text-xs font-bold'>
                            {item.short}
                          </span>
                        </div>
                        <div className='opacity-50'>
                          <span className='text-base2 font-bold'>
                            ${addCommas(item.price as number)}
                          </span>
                        </div>
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
              <div className='opacity-50'>
                <span className='text-base2 font-medium uppercase'>total</span>
              </div>
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
                width={true}
                link='/checkout'
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
