import React from 'react';
import Button from '../button/button.component';
import { NextPage } from 'next';

type Props = {
  className: string;
};

const ContactButton: NextPage<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Button url="/contact">Contact us by email</Button>
      <span className="mt-2 text-gray-900 text-xs tracking-tight leading-tight inline-block">
        *Tapping this button will take you to our contact form.
      </span>
    </div>
  );
};

export default ContactButton;
