import React from 'react';

type Props = {
  inputName: string;
  inputType: string;
  inputId: string;
  inputRequiredText: string;
  labelName: string;
  labelRequired: boolean;
  isValid: boolean;
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  inputName,
  inputType,
  inputId,
  inputRequiredText,
  labelName,
  labelRequired,
  isValid,
  handleChange,
  inputValue
}: Props) => {
  return (
    <div>
      <label className="block pb-1 font-bold text-xl" htmlFor={inputId}>
        {labelName}
        {labelRequired ? <span className="text-red-600">*</span> : ''}
      </label>
      <input
        value={inputValue}
        onChange={handleChange}
        type={inputType}
        name={inputName}
        id={inputId}
        className={
          (!isValid
            ? 'border-4 border-frost-blue bg-frost-lightest-blue '
            : 'border-2 border-frost-gray bg-white ') +
          'border-solid w-full p-2 text-lg block h-12'
        }
      />
      {!isValid ? (
        <span className="pt-1 inline-block text-xl text-frost-blue">
          {inputRequiredText}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default FormInput;
