import React from 'react';

type Props = {
  inputName: string;
  inputType: string;
  inputId: string;
  inputErrorText: string;
  labelName: string;
  labelRequired: boolean;
  inputValue: string;
  hasError: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  inputName,
  inputType,
  inputId,
  inputErrorText,
  labelName,
  labelRequired,
  handleChange,
  inputValue,
  hasError
}: Props) => {
  return (
    <div>
      <label className="block pb-1 font-bold text-xl" htmlFor={inputId}>
        {labelName}
        {labelRequired ? <span className="text-red-600">*</span> : ''}
      </label>
      <input
        value={inputValue}
        onBlur={handleChange}
        type={inputType}
        name={inputName}
        id={inputId}
        className={
          (hasError
            ? 'border-4 border-frost-blue bg-frost-lightest-blue '
            : 'border-2 border-frost-gray bg-white ') +
          'border-solid w-full p-2 text-lg block h-12'
        }
      />
      {hasError ? (
        <span className="pt-1 inline-block text-xl text-frost-blue">
          {inputErrorText}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default FormInput;
