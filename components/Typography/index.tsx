import React from 'react';

type Type = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const VARIANT_Styles: Record<Type, string> = {
  h1: 'text-[36px] md:text-5xl',
  h2: 'text-2xl md:text-4xl',
  h3: 'text-2xl md:text-3xl',
  h4: 'text-xl md:text-2xl',
  h5: 'text-lg md:text-xl',
  h6: 'text-lg',
  p: 'text-sm md:text-base',
};
type Weight =
  | 'font-thin'
  | 'font-extralight'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-semibold'
  | 'font-bold'
  | 'font-extrabold'
  | 'font-black';

type Transforms = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

const VARIANT_Transforms: Record<Transforms, string> = {
  none: 'inherit',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
};

interface Props {
  children: React.ReactNode;
  as?: Type;
  looksLike?: Type;
  weight?: Weight;
  transform?: Transforms;
}

const Typography = ({
  children,
  as = 'p',
  looksLike = as,
  weight,
  transform = 'none',
}: Props) => {
  const TagName = as as keyof JSX.IntrinsicElements;
  return (
    <TagName
      className={`
        ${VARIANT_Styles[looksLike]}
        ${VARIANT_Transforms[transform]}
        ${weight}
      `}
    >
      {children}
    </TagName>
  );
};

export default Typography;
