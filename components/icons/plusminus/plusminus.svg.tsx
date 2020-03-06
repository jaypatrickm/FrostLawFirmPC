import React from 'react';
import { NextPage } from 'next';

type Props = {
  isOpen: boolean;
  className?: string;
};
const PlusMinus: NextPage<Props> = ({ isOpen, className }) => {
  return (
    <svg
      className={className + ' fill-current text-white'}
      style={{ width: '20px' }}
      viewBox="0 0 500 500"
    >
      <rect
        className={isOpen ? 'hidden' : 'block'}
        x="0.35"
        y="175.48"
        width="499.65"
        height="149.02"
      />
      <rect
        className={isOpen ? 'hidden' : 'block'}
        x="0.35"
        y="175.48"
        width="499.65"
        height="149.02"
        transform="translate(500.17 -0.18) rotate(90)"
      />
      <rect
        className={isOpen ? 'block' : 'hidden'}
        y="175.15"
        width="500"
        height="149.12"
      />
    </svg>
  );
};

export default PlusMinus;
