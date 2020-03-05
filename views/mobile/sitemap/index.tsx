import React from 'react';
import MasterLayout from '../../../views/layouts/master/master.layout';

type SiteMapMobileProps = {
  isMobile: boolean;
  page: string;
};

const SiteMapMobile = ({ isMobile, page }: SiteMapMobileProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <h1>Mobile</h1>
    </MasterLayout>
  );
};

export default SiteMapMobile;
