import React, { useState } from 'react';
import CheckboxSvg from '../../components/icons/checkbox/checkbox.svg';

type Props = {
  value: string;
  inputName: string;
  inputId: string;
  handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
};

const CheckboxButton = ({
  value,
  inputName,
  inputId,
  handleCheck,
  isChecked
}: Props) => {
  return (
    <label
      className="inline-block relative py-2 pr-3 mb-2 cursor-pointer text-lg inline-flex items-center"
      htmlFor={inputId}
      style={{
        userSelect: 'none'
      }}
    >
      <span className="w-5 inline-block mr-2">
        <CheckboxSvg isActive={isChecked} />
      </span>
      {value}
      <input
        onChange={handleCheck}
        type="checkbox"
        name={inputName}
        id={inputId}
        value={value}
        checked={isChecked}
        style={{
          position: 'absolute',
          opacity: 0,
          cursor: 'pointer',
          height: 0,
          width: 0
        }}
      />
    </label>
  );
};
export default CheckboxButton;
