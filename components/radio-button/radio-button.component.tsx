import React, { useState } from 'react';
import RadioSvg from '../../assets/icons/radio/radio.svg';

type Props = {
  value: string;
  inputName: string;
  inputId: string;
  handleRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedOption?: string;
};

const RadioButton = ({
  value,
  inputName,
  inputId,
  handleRadio,
  selectedOption = ''
}: Props) => {
  const isActive = selectedOption == value;
  return (
    <label
      className="inline-block relative py-2 pr-3 mb-2 cursor-pointer text-lg inline-flex items-center"
      htmlFor={inputId}
      style={{
        userSelect: 'none'
      }}
    >
      <span className="w-5 inline-block mr-2">
        <RadioSvg isActive={isActive} />
      </span>
      {value}
      <input
        onChange={handleRadio}
        type="radio"
        name={inputName}
        id={inputId}
        value={value}
        checked={isActive}
        className="border-solid border-2 border-frost-gray mr-4 text-lg inline-block"
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
export default RadioButton;
