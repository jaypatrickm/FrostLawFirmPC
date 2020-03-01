import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { validateIsPhone } from './contact-form.utils';
import UsStates from '../../data/us-states';
import Checkbox from '../../components/checkbox/checkbox.component';
import TextInput from '../text-input/text-input.component';
import Dropdown from '../dropdown/dropdown.component';
import RadioButtons from '../radio-buttons/radio-buttons.component';
import CheckboxGroup from '../checkbox-group/checkbox-group.component';
import TextArea from '../text-area/text-area.component';

const ContactForm = () => {
  const [method, setMethod] = useState('');
  const [newEmailError, setNewEmailError] = useState(false);
  const [cellRequired, setCellRequired] = useState(false);

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

  const handleCell = (metaTouched: boolean, metaError: string | undefined) => {
    if (metaError != undefined) {
      setCellRequired(metaTouched && metaError.length > 0);
    } else {
      setCellRequired(false);
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
            cellNumber: '',
            homeNumber: '',
            isTextOkay: '',
            preferredTime: [],
            hasDiagnosis: [],
            biopsyPerformed: '',
            comments: ''
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
            state: yup
              .string()
              .notOneOf(['-1', 'State is required'])
              .required('State is required'),
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
            cellNumber: yup
              .string()
              .test('cellNumbertest', 'Cell Number required', function(value) {
                const { homeNumber, contactMethod } = this.parent;
                return !validateIsPhone(homeNumber) && contactMethod == 'Phone'
                  ? value != null
                  : true;
              })
              .test('cellNumberRegextest', 'ex. 310-777-3333', function(value) {
                const { homeNumber, contactMethod } = this.parent;
                return contactMethod == 'Phone' && !validateIsPhone(homeNumber)
                  ? validateIsPhone(value)
                  : true;
              }),
            homeNumber: yup
              .string()
              .test('homeNumbertest', 'Home Number required', function(value) {
                const { cellNumber, contactMethod } = this.parent;
                return !validateIsPhone(cellNumber) && contactMethod == 'Phone'
                  ? value != null
                  : true;
              })
              .test('homeNumberRegextest', 'ex. 310-777-3333', function(value) {
                const { cellNumber, contactMethod } = this.parent;
                return contactMethod == 'Phone' && !validateIsPhone(cellNumber)
                  ? validateIsPhone(value)
                  : true;
              }),
            isTextOkay: yup.boolean().notRequired(),
            preferredTime: yup.array().when('contactMethod', {
              is: 'Phone',
              then: yup
                .array<'Morning' | 'Afternoon' | 'Evening'>()
                .of(yup.string())
                .required('Preferred Contact Method required'),
              otherwise: yup.array().notRequired()
            }),
            hasDiagnosis: yup.array().notRequired(),
            biopsyPerformed: yup.mixed().notRequired()
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
                  ? ' border-frost-gray bg-frost-light-gray border-solid border-2 pt-3 px-4'
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
                  handler={handleCell}
                />
              </div>
              <Checkbox
                label="Is it okay to send you a text message?"
                id="isTextOkay"
                name="isTextOkay"
                value="isTextOkay"
                required={false}
                type="checkbox"
              />
              <span className="block">(This is not a subscription.)</span>
              <span className="block">
                (Standard text messaging rates apply.)
              </span>
              <div className="pb-3 pt-2">
                <TextInput
                  label="Home Number"
                  id="homeNumber"
                  name="homeNumber"
                  required={method == 'Phone'}
                  type="phone"
                />
              </div>
              <div className="pb-3">
                <CheckboxGroup
                  choices={[
                    { id: 'Morning', label: 'Morning', value: 'Morning' },
                    { id: 'Afternoon', label: 'Afternoon', value: 'Afternoon' },
                    { id: 'Evening', label: 'Evening', value: 'Evening' }
                  ]}
                  name="preferredTime"
                  groupLabel="Preferred time(s) to reach you?"
                  required={method == 'Phone'}
                />
              </div>
            </div>
            <div className="pb-3 px-4">
              <CheckboxGroup
                choices={[
                  { id: 'hasDiagnosisSelf', label: 'Self', value: 'Self' },
                  {
                    id: 'hasDiagnosisSpouse',
                    label: 'Spouse',
                    value: 'Spouse'
                  },
                  {
                    id: 'hasDiagonsisFather',
                    label: 'Father',
                    value: 'Father'
                  },
                  {
                    id: 'hasDiagnosisMother',
                    label: 'Mother',
                    value: 'Mother'
                  },
                  { id: 'hasDiagonsisOther', label: 'Other', value: 'Other' }
                ]}
                name="hasDiagnosis"
                groupLabel="Check here if you or someone you know has Mesothelioma, Asbestosis,
                  or Lung Cancer:"
                required={false}
              />
            </div>

            <RadioButtons
              choices={[
                { id: 'biopsyYes', label: 'Yes', value: 'Yes' },
                { id: 'biopsyNo', label: 'No', value: 'No' }
              ]}
              groupLabel="Has a biopsy been performed?"
              required={false}
              name="biopsyPerformed"
              handler={handleMethod}
            />

            <div>
              <TextArea label="Comments/Questions" name="comments" />
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
    </div>
  );
};

export default ContactForm;
