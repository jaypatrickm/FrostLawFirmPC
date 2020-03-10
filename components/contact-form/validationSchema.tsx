import * as yup from 'yup';
import { validateIsPhone } from './contact-form.utils';
export const validationSchema = yup.object({
  fullName: yup
    .string()
    .matches(/([a-zA-Z\'\,\.\-]+ [a-zA-Z\'\,\.\-]+)+$/i, 'ex. John Doe')
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
});
