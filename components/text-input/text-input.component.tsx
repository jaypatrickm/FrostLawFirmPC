import React, { useRef } from 'react';
import { useField } from 'formik';
import useFocusOnError from '../../hooks/use-focus-on-error';

type TextInputProps = {
  label: string;
  id: string;
  name: string;
  required: boolean;
  type: string;
  handler?: (metaTouched: boolean, metaError: string | undefined) => void;
};

const TextInput = ({
  label,
  required,
  id,
  handler = () => {},
  name,
  ...props
}: TextInputProps) => {
  const fieldRef = useRef(null);
  const [field, meta, helpers] = useField(name);

  useFocusOnError({ fieldRef, name });
  return (
    <>
      <label className="block pb-1 font-bold text-xl" htmlFor={id}>
        {label}
        {required ? <span className="text-red-600">*</span> : null}
      </label>
      <input
        ref={fieldRef}
        className={
          (meta.touched && meta.error
            ? 'border-4 border-frost-blue bg-frost-lightest-blue '
            : 'border-2 border-frost-gray bg-white ') +
          'border-solid w-full p-2 text-lg block h-12'
        }
        onChange={handler(meta.touched, meta.error)}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className="pt-1 inline-block text-xl text-frost-blue">
          {meta.error}
        </span>
      ) : null}
    </>
  );
};

export default TextInput;
