import React, { useState } from 'react';
import MasterLayout from '../../layouts/master/master.layout';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component';
import RadioButton from '../../components/radio-button/radio-button.component';
import Checkbox from '../../components/checkbox/checkbox.component';
import FormInput from '../../components/form-input/form-input.component';

const ContactPage = () => {
  const [preferredContactMethod, setPreferredContactMethod] = useState('');
  const [
    isPreferredContactMethodValid,
    setIsPreferredContactMethodValid
  ] = useState(true);
  const [isTextOkay, setIsTextOkay] = useState(false);
  const [preferredTime, setPreferredTime] = useState([] as string[]);
  const [hasDiagnosis, setHasDiagnosis] = useState([] as string[]);
  const [hasBiopsyBeenPerformed, setHasBiopsyBeenPerformed] = useState('');
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [isCityValid, setIsCityValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setIsEmailValid(value.length > 0);
    //TODO:check if valid email
  };

  const handleContactMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;

    setPreferredContactMethod(value);
    const isValid = value != '';
    setIsPreferredContactMethodValid(isValid);
  };

  const handleFullNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const regex = /[a-z0-9`'!&.]\s[a-z0-91'!&.]/g;
    const isValid = regex.test(value.toLowerCase()) && value.length > 0;

    setIsFullNameValid(isValid);
  };

  const handleCityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const regex = /[a-z]/g;
    const isValid = regex.test(value.toLowerCase()) && value.length > 0;
    //TODO: Test City
    setIsCityValid(isValid);
  };

  const handleHasBiopsyBeenPerformedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let value = event.target.value;
    setHasBiopsyBeenPerformed(value);
  };

  const handleIsTextOkayChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let checked = event.target.checked;
    setIsTextOkay(checked);
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

  return (
    <MasterLayout>
      <div>
        <div className="bg-frost-light-gray">
          <Breadcrumbs path1="Home" url1="/" path2="Contact" url2="/contact" />
        </div>
        <div className="bg-frost-lightest-blue p-4">
          <h1 className="font-extrabold text-frost-blue text-4xl text-center">
            Contact Us
          </h1>
        </div>
        <div className="bg-white pt-6 pb-6">
          <div className="px-4">
            <form>
              <div className="pb-3 px-4">
                <FormInput
                  inputName="fullName"
                  inputType="text"
                  inputId="fullName"
                  inputRequiredText="Full Name required"
                  labelName="Full Name"
                  labelRequired={true}
                  isValid={isFullNameValid}
                  handleChange={handleFullNameChange}
                />
              </div>
              <div className="flex flex-wrap px-4">
                <div className="pb-3 pr-1 w-1/2">
                  <FormInput
                    inputName="city"
                    inputType="text"
                    inputId="city"
                    inputRequiredText="City required"
                    labelName="City"
                    labelRequired={true}
                    isValid={isCityValid}
                    handleChange={handleCityChange}
                  />
                </div>
                <div className="pb-3 pl-1 w-1/2 relative">
                  <label
                    className="block pb-1 font-bold text-xl"
                    htmlFor="state"
                  >
                    State<span className="text-red-600">*</span>
                  </label>
                  <select
                    name="state"
                    id="state"
                    className="border-solid border-2 bg-white border-frost-gray w-full p-2 text-lg block rounded-none h-12"
                  >
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Hawaii</option>
                  </select>
                  <div className="pointer-events-none absolute mt-6 inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pb-3 px-4">
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
                  (preferredContactMethod == 'Email'
                    ? 'border-frost-gray bg-frost-light-gray border-solid  border-2 '
                    : '') + 'px-4 pt-3'
                }
              >
                <div className="pb-3">
                  <FormInput
                    inputName="email"
                    inputType="email"
                    inputId="email"
                    inputRequiredText="Email Required"
                    labelName="Email"
                    labelRequired={
                      preferredContactMethod == 'Email' ? true : false
                    }
                    isValid={isEmailValid}
                    handleChange={handleEmailChange}
                  />
                </div>
              </div>
              <div
                className={
                  (preferredContactMethod == 'Phone'
                    ? 'border-solid border-frost-gray border-2 bg-frost-light-gray '
                    : '') + 'px-4 pt-3'
                }
              >
                {preferredContactMethod == 'Phone' ? (
                  <h4 className="pt-2 pb-3">
                    At least one phone number is required.
                  </h4>
                ) : (
                  ''
                )}

                <div className="pb-3">
                  <label
                    className="block pb-1 font-bold text-xl"
                    htmlFor="cellNumber"
                  >
                    Cell Number{' '}
                    {preferredContactMethod == 'Phone' ? (
                      <span className="text-red-600">*</span>
                    ) : (
                      ''
                    )}
                  </label>
                  <input
                    type="text"
                    name="cellNumber"
                    id="cellNumber"
                    className="border-solid border-2 border-frost-gray w-full p-2 text-lg block"
                  />
                  <span className="pt-1 inline-block text-xl text-frost-blue">
                    Cell Number required
                  </span>
                </div>
                <Checkbox
                  value="Is it okay to send you a text message?"
                  inputName="isTextOkay"
                  inputId="isTextOkay"
                  handleCheck={handleIsTextOkayChange}
                  isChecked={isTextOkay}
                />
                <span className="block">(This is not a subscription.)</span>
                <span className="block">
                  (Standard text messaging rates apply.)
                </span>
                <div className="pb-3 pt-2">
                  <label
                    className="block pb-1 font-bold text-xl"
                    htmlFor="homeNumber"
                  >
                    Home Number{' '}
                    {preferredContactMethod == 'Phone' ? (
                      <span className="text-red-600">*</span>
                    ) : (
                      ''
                    )}
                  </label>
                  <input
                    type="text"
                    name="homeNumber"
                    id="homeNumber"
                    className="border-solid border-2 border-frost-gray w-full p-2 text-lg block"
                  />
                  <span className="pt-1 inline-block text-xl text-frost-blue">
                    Home Number required
                  </span>
                </div>
                <div className="pb-3">
                  <h4 className="block pb-1 font-bold text-xl">
                    Preferred time(s) to reach you:
                    {preferredContactMethod == 'Phone' ? (
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
                  <span className="pt-1 block text-xl text-frost-blue">
                    Preferred time is required
                  </span>
                </div>
              </div>
              <div className="pb-3 px-4">
                <h4 className="block pb-1 font-bold text-xl">
                  Check here if you or someone you know has Mesothelioma,
                  Asbestosis, or Lung Cancer:
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
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default ContactPage;
