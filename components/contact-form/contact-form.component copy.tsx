import React, { useState, ReactDOM, ReactEventHandler } from 'react';
import { Formik, Form, useField, FormikProps, FieldMetaProps } from 'formik';
import * as yup from 'yup';

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

import TextInput from '../text-input/text-input.component';
import Dropdown from '../dropdown/dropdown.component';
import RadioButtons from '../radio-buttons/radio-buttons.component';

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

  const [fullNameError, setFullNameError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [
    preferredContactMethodError,
    setPreferredContactMethodError
  ] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cellNumberError, setCellNumberError] = useState(false);
  const [homeNumberError, setHomeNumberError] = useState(false);
  const [preferredTimeError, setPreferredTimeError] = useState(false);

  const [isPreferredTimeRequired, setIsPreferredTimeRequired] = useState(false);
  const [isEmailRequired, setIsEmailRequired] = useState(false);
  const [isCellNumberRequired, setIsCellNumberRequired] = useState(false);
  const [isHomeNumberRequired, setIsHomeNumberRequired] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(validateFullName(fullName));

    setFullNameError(!validateFullName(fullName));
    setCityError(!validateCity(city));
    setPreferredContactMethodError(
      !(
        preferredContactMethod === 'Email' || preferredContactMethod === 'Phone'
      )
    );
    if (preferredContactMethod === 'Email')
      setEmailError(!validateEmail(email));

    if (preferredContactMethod === 'Phone') {
      setCellNumberError(!validateIsPhone(cellNumber));
      setHomeNumberError(!validateIsPhone(homeNumber));
      setPreferredTimeError(preferredTime.length <= 0);
    }
    console.log(fullNameError);
    console.log(cityError);
    console.log(preferredContactMethodError);
    fullNameError ||
    cityError ||
    preferredContactMethodError ||
    (preferredContactMethod === 'Email' ? emailError : false) ||
    ((preferredContactMethod === 'Phone'
      ? cellNumberError && homeNumberError
      : false) &&
      (preferredContactMethod === 'Phone' ? preferredTimeError : false))
      ? console.log('form has errors')
      : console.log('good form');

    console.log('fullName: ' + fullName);
    console.log('city: ' + city);
    console.log('state: ' + state);
    console.log('preferred contact method : ' + preferredContactMethod);
    console.log('email: ' + email);
    console.log('cellNumber: ' + cellNumber);
    console.log('isTextOkay: ' + isTextOkay);
    console.log('homeNumber: ' + homeNumber);
    console.log('preferredTime: ' + preferredTime);
    console.log('hasDiagnosis: ' + hasDiagnosis);
    console.log('hasBiopsyBeenPerformed: ' + hasBiopsyBeenPerformed);
    console.log('comments: ' + comments);
  };

  const handleFullNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const isValid = validateFullName(value);

    setFullNameError(!isValid);
    setFullName(value);
  };

  const handleCityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const isValid = validateCity(value);

    setCityError(!isValid);
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

    setPreferredContactMethodError(!isValid);
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

    setEmailError(!isValid);
    setEmail(value);
  };

  const handleCellNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const isValid = validateIsPhone(value);

    setCellNumberError(!isValid);
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

    setHomeNumberError(!isValid);
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

      setPreferredTimeError(!isValid);
    } else {
      setPreferredTimeError(false);
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

  const [method, setMethod] = useState('');
  const [newEmailError, setNewEmailError] = useState(false);

  const handleMethod = (value: string) => {
    setMethod(value);
  };

  const handleEmail = (metaTouched: boolean, metaError: string | undefined) => {
    if (metaError != undefined) {
      setNewEmailError(metaTouched && metaError.length > 0);
    } else {
      setNewEmailError(false);
    }
  };

  return (
    <div>
      <div className="my-6">
        <Formik
          initialValues={{
            fullName: '',
            city: '',
            state: '',
            contactMethod: '',
            email: '',
            cellNumber: ''
          }}
          validationSchema={yup.object({
            fullName: yup
              .string()
              .matches(
                /([a-zA-Z\'\,\.\-]+ [a-zA-Z\'\,\.\-]+)+$/i,
                'ex. John Doe'
              )
              .required('Full Name is required'),
            city: yup
              .string()
              .matches(/([a-z])+/g, 'ex. San Pedro')
              .required('City is required'),
            state: yup.string().required('State is required'),
            contactMethod: yup
              .mixed()
              .oneOf(['Email', 'Phone'])
              .required('Preferred Contact Method required'),
            email: yup.string().when('contactMethod', {
              is: 'Email',
              then: yup
                .string()
                .email('ex. youremail@address.com')
                .required('Email is required'),
              otherwise: yup.string().min(0)
            }),
            cellNumber: yup.string().when('contactMethod', {
              is: 'Phone',
              then: yup
                .string()
                .matches(
                  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  'ex. 310-444-7878'
                ),
              otherwise: yup.string().min(0)
            })
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className="pb-3 px-4">
              <TextInput
                label="Full Name"
                id="fullName"
                name="fullName"
                required={true}
                type="text"
              />
            </div>
            <div className="flex flex-wrap px-4">
              <div className="pb-3 pr-1 w-1/2">
                <TextInput
                  label="City"
                  id="city"
                  name="city"
                  required={true}
                  type="text"
                />
              </div>
              <div className="pb-3 pl-1 w-1/2 relative">
                <Dropdown label="State" id="state" name="state" required={true}>
                  <option value={-1}>--SELECT--</option>
                  {UsStates.map(state => {
                    return (
                      <option key={state.name} value={state.name}>
                        {state.name}
                      </option>
                    );
                  })}
                </Dropdown>
              </div>
            </div>

            <RadioButtons
              choices={[
                { id: 'Email', label: 'Email', value: 'Email' },
                { id: 'Phone', label: 'Phone', value: 'Phone' }
              ]}
              groupLabel="Preferred Contact Method"
              required={true}
              name="contactMethod"
              handler={handleMethod}
            />

            <div
              className={
                method == 'Email'
                  ? 'border-frost-gray bg-frost-light-gray border-solid border-2 pt-3 px-4'
                  : 'px-4'
              }
            >
              <div className="pb-3">
                <TextInput
                  label="Email"
                  id="email"
                  name="email"
                  required={method == 'Email'}
                  type="email"
                  handler={handleEmail}
                />
              </div>
            </div>

            <div
              className={
                (method == 'Phone'
                  ? 'border-solid border-frost-gray border-2 bg-frost-light-gray mb-3 '
                  : '') + 'px-4 pt-3'
              }
            >
              {method == 'Phone' ? (
                <h4 className="pt-2 pb-3">
                  At least one phone number is required.
                </h4>
              ) : (
                ''
              )}

              <div className="pb-3">
                <TextInput
                  label="Cell Number"
                  id="cellNumber"
                  name="cellNumber"
                  required={method == 'Phone'}
                  type="phone"
                />
                {/* <FormInput
                  inputName="cellNumber"
                  inputType="text"
                  inputId="cellNumber"
                  inputErrorText="ex. (310)444-4555"
                  labelName="Cell Number"
                  labelRequired={isCellNumberRequired}
                  handleChange={handleCellNumberChange}
                  inputValue={cellNumber}
                  hasError={cellNumberError}
                /> */}
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
                <FormInput
                  inputName="homeNumber"
                  inputType="text"
                  inputId="homeNumber"
                  inputErrorText="ex. (310)555-4444"
                  labelName="Home Number"
                  labelRequired={isHomeNumberRequired}
                  handleChange={handleHomeNumberChange}
                  inputValue={homeNumber}
                  hasError={homeNumberError}
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
                {preferredTimeError ? (
                  <span className="pt-1 block text-xl text-frost-blue">
                    Preferred time is required
                  </span>
                ) : (
                  ''
                )}
              </div>
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
          </Form>
        </Formik>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="pb-3 px-4">
          <FormInput
            inputName="fullName"
            inputType="text"
            inputId="fullName"
            inputErrorText="ex. John Doe"
            labelName="Full Name"
            labelRequired={true}
            handleChange={handleFullNameChange}
            inputValue={fullName}
            hasError={fullNameError}
          />
        </div>
        <div className="flex flex-wrap px-4">
          {/* <div className="pb-3 pr-1 w-1/2">
            <FormInput
              inputName="city"
              inputType="text"
              inputId="city"
              inputErrorText="ex. San Pedro"
              labelName="City"
              labelRequired={true}
              handleChange={handleCityChange}
              inputValue={city}
              hasError={cityError}
            />
          </div> */}
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
              style={{ WebkitAppearance: 'none' }}
            >
              {UsStates.map(state => {
                return (
                  <option key={state.name} value={state.name}>
                    {state.name}
                  </option>
                );
              })}
            </select>

            <div className="pointer-events-none absolute mt-6 top-0 right-0 flex items-center pr-3 text-gray-700">
              <DropdownArrowSvg className="w-6 mt-6" />
            </div>
          </div>
        </div>
        {/* <div
          className={
            (preferredContactMethodError
              ? 'border-solid border-2 border-frost-blue pt-3 '
              : '') + 'pb-3 px-4'
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
          {preferredContactMethodError ? (
            <span className="pt-1 inline-block text-xl text-frost-blue">
              Preferred Contact Method required
            </span>
          ) : (
            ''
          )}
        </div> */}
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
              inputErrorText="Email Required"
              labelName="Email"
              labelRequired={isEmailRequired}
              handleChange={handleEmailChange}
              inputValue={email}
              hasError={emailError}
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
            <h4 className="pt-2 pb-3">
              At least one phone number is required.
            </h4>
          ) : (
            ''
          )}

          <div className="pb-3">
            <FormInput
              inputName="cellNumber"
              inputType="text"
              inputId="cellNumber"
              inputErrorText="ex. (310)444-4555"
              labelName="Cell Number"
              labelRequired={isCellNumberRequired}
              handleChange={handleCellNumberChange}
              inputValue={cellNumber}
              hasError={cellNumberError}
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
              inputErrorText="ex. (310)555-4444"
              labelName="Home Number"
              labelRequired={isHomeNumberRequired}
              handleChange={handleHomeNumberChange}
              inputValue={homeNumber}
              hasError={homeNumberError}
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
            {preferredTimeError ? (
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
            Check here if you or someone you know has Mesothelioma, Asbestosis,
            or Lung Cancer:
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
    </div>
  );
};

export default ContactForm;
