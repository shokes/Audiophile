import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  bg?: string;
  hover: string;
  link?: string;
  children: React.ReactNode;
  block: boolean;
}

const buttonClasses = classNames(
  'uppercase duration-300 py-[15px] px-[31px]  text-sm font-bold'
);

const blockClasses = classNames('w-full block');

const Button = ({ bg = '', hover, link = '', children, block }: Props) => {
  return link !== '' ? (
    <Link
      href={link}
      className={classNames(
        `${hover} ${buttonClasses} text-center `,
        bg === '' ? 'border border-black  hover:text-white' : `${bg}`,
        block && blockClasses
      )}
    >
      {children}
    </Link>
  ) : (
    <div
      className={classNames(
        `${hover} ${buttonClasses} cursor-pointer ${bg}`,
        block && blockClasses
      )}
    >
      {children}
    </div>
  );
};

export default Button;
