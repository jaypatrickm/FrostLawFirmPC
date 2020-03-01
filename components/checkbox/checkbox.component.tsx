import React, { useState } from 'react';
import { useField } from 'formik';
import CheckboxSvg from '../../components/icons/checkbox/checkbox.svg';

type CheckboxProps = {
  label: string;
  id: string;
  name: string;
  required: boolean;
  tabIndex?: number;
  value: string;
  type: string;
};

const Checkbox = ({
  label,
  id,
  required,
  tabIndex = 0,
  value,
  name,
  type,
  ...props
}: CheckboxProps) => {
  const [field, meta, helpers] = useField({ name, type });
  const { setValue, setTouched } = helpers;
  const customClickById = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.click();
    }
  };

  return (
    <label
      tabIndex={tabIndex}
      className="inline-block relative py-2 px-3 mb-2 cursor-pointer text-lg inline-flex items-center"
      htmlFor={id}
      style={{
        userSelect: 'none'
      }}
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.keyCode == 32) {
          event.stopPropagation();
          event.preventDefault();
          customClickById(id);
        }
      }}
    >
      <span className="w-5 inline-block mr-2">
        <CheckboxSvg isActive={meta.touched && field.value} />
      </span>
      {label}
      <input
        tabIndex={-1}
        type={type}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.keyCode == 32) {
            event.stopPropagation();
            event.preventDefault();
            customClickById(id);
          }
        }}
        name={name}
        id={id}
        value={value}
        onChange={e => {
          setTouched(true);
          setValue(e.target.checked);
        }}
        style={{
          position: 'absolute',
          opacity: 0,
          cursor: 'pointer',
          height: 0,
          width: 0
        }}
      />
    </label>
  );
};
export default Checkbox;
