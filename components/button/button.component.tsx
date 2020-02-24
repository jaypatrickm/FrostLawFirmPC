import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  url: string;
};

const Button: NextPage<Props> = ({ children, url }) => {
  return (
    <Link href={url}>
      <a className="py-2 text-white bg-frost-blue rounded-full block w-full">
        <span className="text-xl font-extrabold tracking-wide leading-tight text-white flex justify-center">
          {children}
        </span>
      </a>
    </Link>
  );
};

export default Button;
