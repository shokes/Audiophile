import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  bg?: string;
  hover: string;
  link: string;
  children: React.ReactNode;
}

const Button = ({
  bg = '',
  hover = 'brandGray-300',
  link = '/',
  children,
}: Props) => {
  return (
    <button>
      <Link
        className={classNames(
          `hover:bg-${hover} uppercase px-[31px] py-[15px] duration-200 text-sm font-bold`,
          bg === '' ? 'border border-black  hover:text-white' : `bg-${bg}`
        )}
        // className={`hover:bg-${hover} bg-${bg} border border-black uppercase  px-[31px] py-[15px] duration-200 text-sm font-bold`}
        href={link}
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
