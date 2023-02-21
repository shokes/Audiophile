import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  bg?: string;
  hover: string;
  link: string;
  content: string;
}

const Button = ({
  bg = '',
  hover = 'black',
  link = '/',
  content = '',
}: Props) => {
  return (
    <button
      className={classNames(
        `hover:bg-${hover} px-[31px] py-[15px] duration-200 text-sm font-bold`,
        bg === '' ? 'border border-black  hover:text-white' : `bg-${bg} `
      )}
    >
      <Link className='uppercase' href={link}>
        {content}
      </Link>
    </button>
  );
};

export default Button;
