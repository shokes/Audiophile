import React from 'react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import classNames from 'classnames';
import { useState } from 'react';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '@/redux/features/homeSlice';

const counterClasses = classNames(
  'w-[16px] cursor-pointer h-[18px] opacity-25 hover:text-brand-amber hover:opacity-100 duration-300'
);

const ProductDetailCounter = () => {
  const dispatch = useDispatch();

  const { tempQuantity } = useSelector((store: RootState) => store.home);

  return (
    <div
      className={`bg-brandGray-200  px-[15px] py-[15px] flex items-center gap-[21px] justify-between`}
    >
      <span>
        <HiOutlineMinusSm
          className={counterClasses}
          onClick={() => dispatch(decreaseQuantity(tempQuantity))}
        />
      </span>
      <span>{tempQuantity}</span>
      <span>
        <HiOutlinePlusSm
          className={counterClasses}
          onClick={() => dispatch(increaseQuantity(tempQuantity))}
        />
      </span>
    </div>
  );
};

export default ProductDetailCounter;
