import React from 'react';
import MasterLayout from '../../../views/layouts/master/master.layout';

type SiteMapDesktopProps = {
  isMobile: boolean;
  page: string;
};

const SiteMapDesktop = ({ isMobile, page }: SiteMapDesktopProps) => {
  return (
    <MasterLayout isMobile={isMobile} page={page}>
      <h1>Desktop</h1>
    </MasterLayout>
  );
};

export default SiteMapDesktop;
