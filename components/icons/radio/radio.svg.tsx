import React from 'react';
import { NextPage } from 'next';

type Props = {
  isActive?: boolean;
  className?: string;
};
const PlusMinus: NextPage<Props> = ({ isActive, className }) => {
  return (
    <svg viewBox="0 0 500 500">
      <path
        className={className + ' fill-current text-frost-gray'}
        d="M250,10a240.06,240.06,0,0,1,93.42,461.14A240.06,240.06,0,0,1,156.58,28.86,238.42,238.42,0,0,1,250,10m0-10C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Z"
      />
      <circle
        className={
          (isActive ? 'text-frost-blue' : 'text-white') + ' fill-current '
        }
        cx="250"
        cy="250"
        r="177"
      />
    </svg>
  );
};

export default PlusMinus;
