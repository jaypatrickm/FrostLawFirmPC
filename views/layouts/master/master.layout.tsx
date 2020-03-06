import React from 'react';

import Header from '../../../components/header/header.component';
import FooterMobile from '../../../components/_mobile/footer/footer.component';
import FooterDesktop from '../../../components/_desktop/footer/footer.component';

interface MasterLayoutProps {
  children?: object;
  isMobile?: boolean;
  page: string;
  showRecognitionAffiliation?: boolean;
}

const MasterLayout = ({
  isMobile = true,
  page,
  showRecognitionAffiliation = true,
  ...props
}: MasterLayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <Header showMobileMenu={false} page={page} />
    <div className="flex-sticky">{props.children}</div>
    {isMobile ? (
      <FooterMobile />
    ) : (
      <FooterDesktop showRecognitionAffiliation={showRecognitionAffiliation} />
    )}
  </div>
);

export default MasterLayout;
