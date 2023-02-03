import React from 'react';

interface Props {
  color: string;
  children?: React.ReactNode;
  hover: string;
}

const Button = ({ color, children, hover }: Props) => {
  return (
    <button
      className={`hover:bg-${hover} bg-${color}  px-[31px] py-[15px] duration-200 text-sm font-bold`}
    >
      {children}
    </button>
  );
};

export default Button;
