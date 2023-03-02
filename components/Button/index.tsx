import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  bg?: string;
  hover: string;
  link: string;
  children: React.ReactNode;
}

const Button = ({ bg = '', hover = '', link = '/', children }: Props) => {
  return (
    <button>
      <Link
        className={classNames(
          `hover:bg-${hover} uppercase  px-[31px] py-[15px] duration-200 text-sm font-bold`,
          bg === '' ? 'border border-black  hover:text-white' : `bg-${bg} `
        )}
        href={link}
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
