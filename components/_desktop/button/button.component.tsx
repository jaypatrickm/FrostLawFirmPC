import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

type ButtonProps = {
  children: string;
  url?: string;
  color?: string;
};

const Button = ({
  children,
  url = '',
  color = 'bg-frost-blue text-white'
}: ButtonProps) => {
  return (
    <Link href={url}>
      <a className={color + ' py-2 rounded-full block'}>
        <span className="text-2xl font-extrabold tracking-wide leading-tight flex justify-center">
          {children}
        </span>
      </a>
    </Link>
  );
};

export default Button;
