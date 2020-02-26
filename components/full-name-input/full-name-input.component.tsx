import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';

const FullNameInput = () => {
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [fullName, setFullName] = useState('');
  const handleFullNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const regex = /[a-z0-9`'!&.]\s[a-z0-91'!&.]/g;
    const isValid = regex.test(value.toLowerCase()) && value.length > 0;

    setIsFullNameValid(isValid);
  };
  return (
    <FormInput
      inputName="fullName"
      inputType="text"
      inputId="fullName"
      inputRequiredText="Full Name required"
      labelName="Full Name"
      labelRequired={true}
      isValid={isFullNameValid}
      handleChange={handleFullNameChange}
      inputValue={fullName}
    />
  );
};

export default FullNameInput;
