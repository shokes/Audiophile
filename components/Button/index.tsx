import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  bg?: string;
  //children: React.ReactNode;
  hover: string;
}

const Button = ({ bg = '', hover = '[#4C4C4C]' }: Props) => {
  return (
    <button
      className={classNames(
        `hover:bg-${hover} px-[31px] py-[15px] duration-200 text-sm font-bold`,
        bg === '' ? 'border border-black  hover:text-white' : `bg-${bg} `
      )}
    >
      <Link className='uppercase' href='/product'>
        See product
      </Link>
    </button>
  );
};

export default Button;
