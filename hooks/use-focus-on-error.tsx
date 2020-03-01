//hook from danielberndt
//https://github.com/jaredpalmer/formik/issues/146
import React from 'react';
import { useFormikContext } from 'formik';

type useFocusOnErrorProps = {
  fieldRef: any;
  name: string;
};

const useFocusOnError = ({ fieldRef, name }: useFocusOnErrorProps) => {
  const formik = useFormikContext();
  const prevSubmitCountRef = React.useRef(formik.submitCount);
  const firstErrorKey = Object.keys(formik.errors)[0];

  React.useEffect(() => {
    if (prevSubmitCountRef.current !== formik.submitCount && !formik.isValid) {
      if (fieldRef.current && firstErrorKey === name) fieldRef.current.focus();
    }
    prevSubmitCountRef.current = formik.submitCount;
  }, [formik.submitCount, formik.isValid, firstErrorKey]);
};

export default useFocusOnError;
