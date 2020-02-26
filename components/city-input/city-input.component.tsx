import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';

const CityInput = () => {
  const [isCityValid, setIsCityValid] = useState(true);
  const [city, setCity] = useState('');
  const handleCityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const regex = /[a-z]/g;
    const isValid = regex.test(value.toLowerCase()) && value.length > 0;
    //TODO: Test City
    setIsCityValid(isValid);
  };
  return (
    <FormInput
      inputName="city"
      inputType="text"
      inputId="city"
      inputRequiredText="City required"
      labelName="City"
      labelRequired={true}
      isValid={isCityValid}
      handleChange={handleCityChange}
      inputValue={city}
    />
  );
};

export default CityInput;
