import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  children?: string;
  url?: string;
  color?: string;
};

const Button: NextPage<Props> = ({
  children = [],
  url = '',
  color = 'bg-frost-blue text-white'
}) => {
  return (
    <Link href={url}>
      <a className={color + ' py-4 rounded-full block w-full'}>
        <span className="text-2xl font-extrabold tracking-wide leading-tight flex justify-center">
          {children}
        </span>
      </a>
    </Link>
  );
};

export default Button;
