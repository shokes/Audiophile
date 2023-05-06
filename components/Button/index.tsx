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
  'uppercase duration-300 py-[31px] lg:py-[15px] px-[31px]  text-sm font-bold'
);

const blockClasses = classNames('w-full block');

const Button = ({ bg = '', hover, link = '', children, block }: Props) => {
  return (
    <button className={`${block && blockClasses}`}>
      {link !== '' ? (
        <Link
          href={link}
          className={classNames(
            `${hover} ${buttonClasses}`,
            bg === '' ? 'border border-black  hover:text-white' : `${bg}`,
            block && blockClasses
          )}
        >
          {children}
        </Link>
      ) : (
        <div
          className={classNames(
            `${hover} ${buttonClasses} ${bg}`,
            block && blockClasses
          )}
        >
          {children}
        </div>
      )}
    </button>
  );
};

export default Button;
