import React from 'react';
import Button from '../mobile/button/button.component';
import { NextPage } from 'next';

type Props = {
  className?: string;
};

const AttorneysButton: NextPage<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Button url="/attorneys">View our attorneys</Button>
    </div>
  );
};

export default AttorneysButton;
