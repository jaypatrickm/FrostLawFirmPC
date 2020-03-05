import React from 'react';
import MasterLayout from '../../../views/layouts/master/master.layout';

type LegalNoticeMobileProps = {
  isMobile: boolean;
  page: string;
};

const LegalNoticeMobile = ({ isMobile, page }: LegalNoticeMobileProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <h1>Mobile</h1>
    </MasterLayout>
  );
};

export default LegalNoticeMobile;
