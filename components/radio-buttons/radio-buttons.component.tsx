import React, { useRef } from 'react';
import { useField } from 'formik';
import RadioSvg from '../../components/icons/radio/radio.svg';
import useFocusOnError from '../../hooks/use-focus-on-error';

type RadioButtonsProps = {
  required: boolean;
  tabIndex?: number;
  groupLabel: string;
  name: string;
  choices: {
    id: string;
    label: string;
    value: string;
  }[];
  handler?: (value: string) => void;
};

const RadioButtons = ({
  groupLabel,
  required,
  tabIndex = 0,
  choices,
  name,
  handler = () => {},
  ...props
}: RadioButtonsProps) => {
  const fieldRef = useRef(null);
  const [field, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;

  const customClickById = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.click();
    }
  };

  useFocusOnError({ fieldRef, name });

  return (
    <div
      className={
        (meta.touched && meta.error
          ? 'border-solid border-2 border-frost-blue pt-3 mb-3 '
          : '') + 'pb-3 px-4'
      }
    >
      <h4 className="block pb-1 font-bold text-xl">
        {groupLabel}
        {required ? <span className="text-red-600">*</span> : ''}
      </h4>

      {choices.map(({ id, label, value }) => {
        return (
          <label
            key={id}
            className="inline-block relative py-2 px-3 mb-2 cursor-pointer text-lg inline-flex items-center"
            htmlFor={id}
            style={{
              userSelect: 'none'
            }}
            tabIndex={tabIndex}
            onKeyDown={(event: React.KeyboardEvent) => {
              if (event.keyCode == 32) {
                event.stopPropagation();
                event.preventDefault();
                customClickById(id);
              }
            }}
          >
            <span className="w-5 inline-block mr-2">
              <RadioSvg isActive={meta.touched && field.value == value} />
            </span>
            {label}
            <input
              ref={fieldRef}
              type="radio"
              id={id}
              value={value}
              name={name}
              onChange={() => {
                setTouched(true);
                setValue(value);
                handler(value);
              }}
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

export default RadioButtons;
