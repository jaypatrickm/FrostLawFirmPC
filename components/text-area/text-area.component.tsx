import React, { useState } from 'react';
import { useField } from 'formik';

type TextAreaProps = {
  label: string;
  name: string;
};

const TextArea = ({ label, ...props }: TextAreaProps) => {
  const [field, meta, helpers] = useField(props);
  const [textLength, setTextLength] = useState(0);
  const { setValue, setTouched } = helpers;
  return (
    <>
      <label>
        {`${label} (${textLength}/1000 character limit)`}
        <textarea
          onChange={e => {
            const target = e.target;
            setTouched(true);
            setValue(target.value);
            setTextLength(target.value.length);
          }}
          className="block w-full border-solid border-frost-gray border-2 h-72 p-2 mt-2"
          maxLength={1000}
        ></textarea>
      </label>
    </>
  );
};

export default TextArea;
