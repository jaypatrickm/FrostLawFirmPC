import React from 'react';
import Button from '../_mobile/button/button.component';
import { NextPage } from 'next';

type Props = {
  className?: string;
};

const BlogButton: NextPage<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Button url="/blog">View our blog</Button>
    </div>
  );
};

export default BlogButton;
