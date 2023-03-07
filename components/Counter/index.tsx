import React from 'react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import classNames from 'classnames';

interface CounterProps {
  paddingY: string;
  paddingX: string;
  gap: string;
}

const counterClasses = classNames('w-[16px] h-[18px] opacity-25');

const Counter = ({ paddingY = '', paddingX = '', gap = '' }: CounterProps) => {
  return (
    <div
      className={`bg-brandGray-200  px-[${paddingX}]  py-[${paddingY}] flex items-center  gap-[${gap}] justify-between}`}
    >
      {' '}
      <span>
        <HiOutlineMinusSm className={counterClasses} />
      </span>
      <span>1 </span>
      <span>
        <HiOutlinePlusSm className={counterClasses} />
      </span>
    </div>
  );
};

export default Counter;
