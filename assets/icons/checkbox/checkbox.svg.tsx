import React from 'react';

type CheckboxProps = {
  isActive: boolean;
  className?: string;
};

const Checkbox = ({ isActive, className }: CheckboxProps) => {
  return (
    <svg viewBox="0 0 500 500">
      <path
        className={className + ' fill-current text-frost-gray'}
        d="M490,10V490H10V10H490M500,0H0V500H500V0Z"
      />
      <rect
        className={
          (isActive ? 'text-frost-blue' : 'text-white') + ' fill-current '
        }
        x="84"
        y="84"
        width="332"
        height="332"
      />
    </svg>
  );
};

export default Checkbox;
