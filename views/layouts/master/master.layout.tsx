import React from 'react';

import Header from '../../../components/header/header.component';
import FooterMobile from '../../../components/mobile/footer/footer.component';
import FooterDesktop from '../../../components/desktop/footer/footer.component';

interface MasterLayoutProps {
  children?: object;
  isMobile?: boolean;
  page: string;
}

const MasterLayout = ({
  isMobile = true,
  page,
  ...props
}: MasterLayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <Header showMobileMenu={false} page={page} />
    <div className="flex-sticky">{props.children}</div>
    {isMobile ? <FooterMobile /> : <FooterDesktop />}
  </div>
);

export default MasterLayout;
