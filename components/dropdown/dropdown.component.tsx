import React, { useRef } from 'react';
import { useField } from 'formik';
import DropdownArrowSvg from '../../components/icons/dropdown-arrow/dropdown-arrow.svg';
import useFocusOnError from '../../hooks/use-focus-on-error';

type DropdownProps = {
  label: string;
  id: string;
  name: string;
  required: boolean;
  children: React.ReactNode[];
};

const Dropdown = ({ label, required, id, name, ...props }: DropdownProps) => {
  const fieldRef = useRef(null);
  const [field, meta] = useField(name);

  //useFocusOnError({ fieldRef, name });
  return (
    <>
      <label className="block pb-1 font-bold text-xl" htmlFor="state">
        {label}
        {required ? <span className="text-red-600">*</span> : null}
      </label>
      <select
        ref={fieldRef}
        {...field}
        {...props}
        className={
          (meta.touched && meta.error
            ? 'border-4 border-frost-blue bg-frost-lightest-blue '
            : 'border-2 border-frost-gray bg-white ') +
          'border-solid w-full p-2 text-lg block h-12 rounded-none'
        }
        style={{ WebkitAppearance: 'none' }}
      />

      <div className="pointer-events-none absolute mt-6 top-0 right-0 flex items-center pr-3 text-gray-700">
        <DropdownArrowSvg className="w-6 mt-6" />
      </div>
      {meta.touched && meta.error ? (
        <span className="pt-1 block text-xl text-frost-blue">{meta.error}</span>
      ) : null}
    </>
  );
};

export default Dropdown;
