import React from 'react';

type DropdownArrowProps = {
  className?: string;
};
const DropDownArrow = ({ className }: DropdownArrowProps) => {
  return (
    <svg
      className={className + ' fill-current text-frost-gray'}
      viewBox="0 0 500 500"
    >
      <polygon points="249.7,109 499.3,109 374.5,249.5 249.7,390 124.9,249.5 0.1,109 " />
    </svg>
  );
};

export default DropDownArrow;
