import React from 'react';
import MasterLayout from '../../../views/layouts/master/master.layout';

type LegalNoticeDesktopProps = {
  isMobile: boolean;
  page: string;
};

const LegalNoticeDesktop = ({ isMobile, page }: LegalNoticeDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <h1>Desktop</h1>
    </MasterLayout>
  );
};

export default LegalNoticeDesktop;
