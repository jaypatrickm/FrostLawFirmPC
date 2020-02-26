import React, { useState } from 'react';
import RadioButton from '../../components/radio-button/radio-button.component';
import Checkbox from '../../components/checkbox/checkbox.component';
import FormInput from '../../components/form-input/form-input.component';
import DropdownArrowSvg from '../../components/icons/dropdown-arrow/dropdown-arrow.svg';
import {
  validateFullName,
  validateIsPhone,
  validateEmail,
  validateCity
} from './contact-form.utils';
import UsStates from '../../data/us-states';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState('');
  const [email, setEmail] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [homeNumber, setHomeNumber] = useState('');
  const [preferredTime, setPreferredTime] = useState([] as string[]);
  const [hasDiagnosis, setHasDiagnosis] = useState([] as string[]);
  const [hasBiopsyBeenPerformed, setHasBiopsyBeenPerformed] = useState('');
  const [comments, setComments] = useState('');
  const [isTextOkay, setIsTextOkay] = useState(false);

  const [
    isPreferredContactMethodValid,
    setIsPreferredContactMethodValid
  ] = useState(true);
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [isCityValid, setIsCityValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPreferredTimeValid, setIsPreferredTimeValid] = useState(true);
  const [isCellNumberValid, setIsCellNumberValid] = useState(true);
  const [isHomeNumberValid, setIsHomeNumberValid] = useState(true);

  const [isPreferredTimeRequired, setIsPreferredTimeRequired] = useState(false);
  const [isEmailRequired, setIsEmailRequired] = useState(false);
  const [isCellNumberRequired, setIsCellNumberRequired] = useState(false);
  const [isHomeNumberRequired, setIsHomeNumberRequired] = useState(false);

  const handleFullNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const isValid = validateFullName(value);

    setIsFullNameValid(isValid);
    setFullName(value);
  };

  const handleCityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const isValid = validateCity(value);

    setIsCityValid(isValid);
    setCity(value);
  };

  const handleStateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = event.target.value;

    setState(value);
  };

  const handleContactMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const isValid = value === 'Email' || value === 'Phone';

    setIsPreferredContactMethodValid(isValid);
    setPreferredContactMethod(value);

    // if value is phone
    // preferred time is required
    // cell or home number is required
    if (value === 'Phone') {
      setIsCellNumberRequired(true);
      setIsHomeNumberRequired(true);
      setIsPreferredTimeRequired(true);
      setIsEmailRequired(false);
    } else {
      setIsCellNumberRequired(false);
      setIsHomeNumberRequired(false);
      setIsPreferredTimeRequired(false);
      setIsEmailRequired(true);
    }
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const isValid = validateEmail(value);

    setIsEmailValid(isValid);
    setEmail(value);
  };

  const handleCellNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const isValid = validateIsPhone(value);

    setIsCellNumberValid(isValid);
    setCellNumber(value);
  };

  const handleIsTextOkayChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const checked = event.target.checked;

    setIsTextOkay(checked);
  };

  const handleHomeNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const isValid = validateIsPhone(value);

    setIsHomeNumberValid(isValid);
    setHomeNumber(value);
  };

  const handlePreferredTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.checked) {
      setPreferredTime([event.target.value, ...preferredTime]);
    } else {
      setPreferredTime(
        preferredTime.filter(element => {
          if (element != event.target.value) return event.target.value;
        })
      );
    }

    if (isPreferredTimeRequired) {
      const isValid = event.target.checked
        ? true
        : preferredTime.length === 1 && !event.target.checked
        ? false
        : true;

      setIsPreferredTimeValid(isValid);
    } else {
      setIsPreferredTimeValid(true);
    }
  };

  const handleHasDiagnosis = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.checked) {
      setHasDiagnosis([event.target.value, ...hasDiagnosis]);
    } else {
      setHasDiagnosis(
        hasDiagnosis.filter(element => {
          if (element != event.target.value) return event.target.value;
        })
      );
    }
  };

  const handleHasBiopsyBeenPerformedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;

    setHasBiopsyBeenPerformed(value);
  };

  const handleCommentsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setComments(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="pb-3 px-4">
        <FormInput
          inputName="fullName"
          inputType="text"
          inputId="fullName"
          inputRequiredText="ex. John Doe"
          labelName="Full Name"
          labelRequired={true}
          isValid={isFullNameValid}
          handleChange={handleFullNameChange}
          inputValue={fullName}
        />
      </div>
      <div className="flex flex-wrap px-4">
        <div className="pb-3 pr-1 w-1/2">
          <FormInput
            inputName="city"
            inputType="text"
            inputId="city"
            inputRequiredText="ex. San Pedro"
            labelName="City"
            labelRequired={true}
            isValid={isCityValid}
            handleChange={handleCityChange}
            inputValue={city}
          />
        </div>
        <div className="pb-3 pl-1 w-1/2 relative">
          <label className="block pb-1 font-bold text-xl" htmlFor="state">
            State<span className="text-red-600">*</span>
          </label>
          <select
            onChange={handleStateChange}
            name="state"
            id="state"
            className="border-solid border-2 bg-white border-frost-gray w-full p-2 text-lg block rounded-none h-12"
            value={state}
          >
            {UsStates.map(state => {
              return (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              );
            })}
          </select>

          <div className="pointer-events-none absolute mt-6 inset-y-0 right-0 flex items-center pr-3 text-gray-700">
            <DropdownArrowSvg className="w-5" />
          </div>
        </div>
      </div>
      <div
        className={
          (isPreferredContactMethodValid
            ? ''
            : 'border-solid border-2 border-frost-blue pt-3 ') + 'pb-3 px-4'
        }
      >
        <h4 className="block pb-1 font-bold text-xl">
          Preferred Contact Method
          <span className="text-red-600">*</span>
        </h4>
        <RadioButton
          inputName="contactMethod"
          inputId="contactByEmail"
          value="Email"
          handleRadio={handleContactMethodChange}
          selectedOption={preferredContactMethod}
          tabIndex={0}
        />
        <RadioButton
          inputName="contactMethod"
          inputId="contactByPhone"
          value="Phone"
          handleRadio={handleContactMethodChange}
          selectedOption={preferredContactMethod}
        />
        {isPreferredContactMethodValid ? (
          ''
        ) : (
          <span className="pt-1 inline-block text-xl text-frost-blue">
            Preferred Contact Method required
          </span>
        )}
      </div>
      <div
        className={
          (isEmailRequired
            ? 'border-frost-gray bg-frost-light-gray border-solid border-2 pt-3 '
            : '') + 'px-4'
        }
      >
        <div className="pb-3">
          <FormInput
            inputName="email"
            inputType="email"
            inputId="email"
            inputRequiredText="Email Required"
            labelName="Email"
            labelRequired={isEmailRequired}
            isValid={isEmailValid}
            handleChange={handleEmailChange}
            inputValue={email}
          />
        </div>
      </div>
      <div
        className={
          (isCellNumberRequired || isHomeNumberRequired
            ? 'border-solid border-frost-gray border-2 bg-frost-light-gray mb-3 '
            : '') + 'px-4 pt-3'
        }
      >
        {isCellNumberRequired || isHomeNumberRequired ? (
          <h4 className="pt-2 pb-3">At least one phone number is required.</h4>
        ) : (
          ''
        )}

        <div className="pb-3">
          <FormInput
            inputName="cellNumber"
            inputType="text"
            inputId="cellNumber"
            inputRequiredText="ex. (310)444-4555"
            labelName="Cell Number"
            labelRequired={isCellNumberRequired}
            isValid={isCellNumberValid}
            handleChange={handleCellNumberChange}
            inputValue={cellNumber}
          />
        </div>
        <Checkbox
          value="Is it okay to send you a text message?"
          inputName="isTextOkay"
          inputId="isTextOkay"
          handleCheck={handleIsTextOkayChange}
          isChecked={isTextOkay}
        />
        <span className="block">(This is not a subscription.)</span>
        <span className="block">(Standard text messaging rates apply.)</span>
        <div className="pb-3 pt-2">
          <FormInput
            inputName="homeNumber"
            inputType="text"
            inputId="homeNumber"
            inputRequiredText="ex. 310-555-4444, (310)555-4444, 3105554444"
            labelName="Home Number"
            labelRequired={isHomeNumberRequired}
            isValid={isHomeNumberValid}
            handleChange={handleHomeNumberChange}
            inputValue={homeNumber}
          />
        </div>
        <div className="pb-3">
          <h4 className="block pb-1 font-bold text-xl">
            Preferred time(s) to reach you:
            {isPreferredTimeRequired ? (
              <span className="text-red-600">*</span>
            ) : (
              ''
            )}
          </h4>
          <Checkbox
            inputName="preferredTimeToCall"
            inputId="preferredMorning"
            isChecked={preferredTime.includes('Morning')}
            handleCheck={handlePreferredTimeChange}
            value="Morning"
          />
          <Checkbox
            inputName="preferredTimeToCall"
            inputId="preferredAfternoon"
            isChecked={preferredTime.includes('Afternoon')}
            handleCheck={handlePreferredTimeChange}
            value="Afternoon"
          />
          <Checkbox
            inputName="preferredTimeToCall"
            inputId="preferredEvening"
            isChecked={preferredTime.includes('Evening')}
            handleCheck={handlePreferredTimeChange}
            value="Evening"
          />
          {isPreferredTimeRequired ? (
            <span className="pt-1 block text-xl text-frost-blue">
              Preferred time is required
            </span>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="pb-3 px-4">
        <h4 className="block pb-1 font-bold text-xl">
          Check here if you or someone you know has Mesothelioma, Asbestosis, or
          Lung Cancer:
        </h4>
        <Checkbox
          inputName="hasDiagnosis"
          inputId="hasDiagnosisSelf"
          isChecked={hasDiagnosis.includes('Self')}
          handleCheck={handleHasDiagnosis}
          value="Self"
        />
        <Checkbox
          inputName="hasDiagnosis"
          inputId="hasDiagnosisSpouse"
          isChecked={hasDiagnosis.includes('Spouse')}
          handleCheck={handleHasDiagnosis}
          value="Spouse"
        />
        <Checkbox
          inputName="hasDiagnosis"
          inputId="hasDiagnosisFather"
          isChecked={hasDiagnosis.includes('Father')}
          handleCheck={handleHasDiagnosis}
          value="Father"
        />
        <Checkbox
          inputName="hasDiagnosis"
          inputId="hasDiagnosisMother"
          isChecked={hasDiagnosis.includes('Mother')}
          handleCheck={handleHasDiagnosis}
          value="Mother"
        />
        <Checkbox
          inputName="hasDiagnosis"
          inputId="hasDiagnosisOther"
          isChecked={hasDiagnosis.includes('Other')}
          handleCheck={handleHasDiagnosis}
          value="Other"
        />
      </div>
      <div className="pb-3 px-4">
        <h4 className="block pb-1 font-bold text-xl">
          Has a biopsy been performed?
        </h4>
        <RadioButton
          inputName="biopsyPerformed"
          inputId="biopsyYes"
          value="Yes"
          handleRadio={handleHasBiopsyBeenPerformedChange}
          selectedOption={hasBiopsyBeenPerformed}
        />
        <RadioButton
          inputName="biopsyPerformed"
          inputId="biopsyNo"
          value="No"
          handleRadio={handleHasBiopsyBeenPerformedChange}
          selectedOption={hasBiopsyBeenPerformed}
        />
      </div>
      <div className="pb-3 px-4">
        <label>
          Comments/Questions (1000 character limit)
          <textarea
            onChange={handleCommentsChange}
            value={comments}
            className="block w-full border-solid border-frost-gray border-2 h-72 p-2 mt-2"
            maxLength={1000}
          ></textarea>
        </label>
      </div>
      <div className="pb-3 mt-2 px-4">
        <button
          type="submit"
          className="py-2 text-white bg-frost-blue rounded-full block w-full"
        >
          <span className="text-xl font-extrabold tracking-wide leading-tight text-white flex justify-center">
            Submit
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
