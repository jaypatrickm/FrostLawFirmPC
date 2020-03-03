import React from 'react';
import Button from '../button/button.component';
import { NextPage } from 'next';

type Props = {
  className?: string;
};

const ContactButton: NextPage<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Button url="/contact">Contact Us</Button>
    </div>
  );
};

export default ContactButton;
