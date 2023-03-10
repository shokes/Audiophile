import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  bg?: string;
  hover: string;
  link?: string;
  children: React.ReactNode;
}
const Button = ({ bg = '', hover, link = '', children }: Props) => {
  return (
    <button
      className={classNames(
        `${hover} uppercase  duration-300  px-[31px] py-[15px] text-sm font-bold`,
        bg === '' ? 'border border-black  hover:text-white' : `${bg}`
      )}
    >
      {link !== '' ? (
        <Link href={link}>{children}</Link>
      ) : (
        <div>{children}</div>
      )}
    </button>
  );
};

export default Button;
