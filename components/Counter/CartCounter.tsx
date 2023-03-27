import React from 'react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import classNames from 'classnames';
import { useState } from 'react';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantityInCart,
  decreaseQuantityInCart,
} from '@/redux/features/homeSlice';

const counterClasses = classNames(
  'w-[16px] cursor-pointer h-[18px] opacity-25 hover:text-brand-amber hover:opacity-100 duration-300'
);

interface CartCounterProps {
  quantity: number;
  short: string;
}

const CartCounter = ({ quantity, short }: CartCounterProps) => {
  const dispatch = useDispatch();

  const { tempQuantity } = useSelector((store: RootState) => store.home);

  return (
    <div
      className='bg-brandGray-200 px-[11.5px]
                      py-[7px] gap-[13px]  flex items-center ${gap} justify-between'
    >
      <span>
        <HiOutlineMinusSm
          className={counterClasses}
          onClick={() => dispatch(decreaseQuantityInCart(short))}
        />
      </span>
      <span>{quantity}</span>
      <span>
        <HiOutlinePlusSm
          className={counterClasses}
          onClick={() => dispatch(increaseQuantityInCart(short))}
        />
      </span>
    </div>
  );
};

export default CartCounter;
