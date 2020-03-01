import React, { useState, useRef } from 'react';
import { useField } from 'formik';
import CheckboxSvg from '../../components/icons/checkbox/checkbox.svg';
import useFocusOnError from '../../hooks/use-focus-on-error';

type CheckboxGroupProps = {
  required: boolean;
  tabIndex?: number;
  groupLabel: string;
  name: string;
  choices: {
    id: string;
    label: string;
    value: string;
  }[];
};

const CheckboxGroup = ({
  groupLabel,
  required,
  tabIndex = 0,
  choices,
  name,
  ...props
}: CheckboxGroupProps) => {
  const [field, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;
  const [preferredAns, setPreferredAns] = useState([] as string[]);

  const customClickById = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.click();
    }
  };

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setTouched(true);
    if (target.checked) {
      const newAns = [...preferredAns, target.value];
      setPreferredAns(newAns);
      setValue(newAns);
    } else {
      if (preferredAns.includes(target.value)) {
        const newAns = preferredAns.filter(item => {
          return item != target.value;
        });
        setPreferredAns(newAns);
        setValue(newAns);
      }
    }
  };
  return (
    <div
      className={
        (meta.touched && meta.error
          ? 'border-solid border-2 border-frost-blue pt-3 mb-3 px-4'
          : '') + ' pb-3'
      }
    >
      <h4 className="block pb-1 font-bold text-xl">
        {groupLabel}
        {required ? <span className="text-red-600">*</span> : ''}
      </h4>

      {choices.map(({ id, label, value }) => {
        const fieldRef = useRef(null);
        useFocusOnError({ fieldRef, name });
        return (
          <label
            key={id}
            className="inline-block relative py-2 px-3 mb-2 cursor-pointer text-lg inline-flex items-center"
            htmlFor={`${name + id}`}
            style={{
              userSelect: 'none'
            }}
            tabIndex={tabIndex}
            onKeyDown={(event: React.KeyboardEvent) => {
              if (event.keyCode == 32) {
                event.stopPropagation();
                event.preventDefault();
                customClickById(`${name + id}`);
              }
            }}
          >
            <span className="w-5 inline-block mr-2">
              <CheckboxSvg
                isActive={meta.touched && field.value.includes(value)}
              />
            </span>
            {label}
            <input
              ref={fieldRef}
              type="checkbox"
              value={value}
              name={`${name + id}`}
              onChange={e => {
                handler(e);
              }}
              id={`${name + id}`}
              className="border-solid border-2 border-frost-gray mr-4 text-lg inline-block"
              style={{
                position: 'absolute',
                opacity: 0,
                cursor: 'pointer',
                height: 0,
                width: 0
              }}
              tabIndex={-1}
            />
          </label>
        );
      })}
      {meta.touched && meta.error ? (
        <span className="pt-1 block text-xl text-frost-blue">{meta.error}</span>
      ) : (
        ''
      )}
    </div>
  );
};

export default CheckboxGroup;
